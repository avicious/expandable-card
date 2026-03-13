# Expandable Animated Card

A smooth, accessible, and responsive expandable card component built with React and Framer Motion. This component features seamless layout transitions, graceful unmounting animations, and built-in keyboard accessibility, making it perfect for FAQs, feature highlights, or content-heavy dashboards.

## Features

- **Smooth Animations:** Utilizes Framer Motion's `layout` prop for fluid height transitions when opening and closing.
- **Exit Animations:** Employs `<AnimatePresence>` to gracefully fade and slide out content when the card is collapsed.
- **Accessible:** Includes `role="button"`, `tabIndex={0}`, and `onKeyDown` handlers so keyboard users can navigate and toggle the card using `Enter` or `Space`.
- **Event Isolation:** Safely handles nested click events using `e.stopPropagation()` on the inner close button to prevent double-toggling.
- **Modular Styling:** Styled using CSS Modules (`Card.module.css`) to prevent style leakage.

## How It Works

The component manages a complex animation sequence through several key Framer Motion concepts:

### 1. The Layout Projection Engine

Normally, adding content to a div causes it to "snap" to a new size. By adding the `layout` prop to the `<motion.div>`, Framer Motion triggers a **FLIP** (First, Last, Invert, Play) animation. It calculates the bounding box before and after the state change and interpolates the transform to make the expansion look fluid.

### 2. AnimatePresence & Unmounting

Standard React logic deletes elements from the DOM immediately when a condition becomes `false`.

- **The Problem:** The content would vanish instantly, ruining the closing animation.
- **The Solution:** `<AnimatePresence>` tracks its direct children. When `isExpanded` becomes false, it delays the unmounting until the `exit` animation (defined in your animation object) is complete.

### 3. Event Propagation Shielding

The "Close" button sits inside the main Card container. Since both have click handlers, a click on the button would naturally "bubble" up to the Card.

- We use `e.stopPropagation()` in the button's `onClick` handler.
- This prevents the parent's toggle logic from firing immediately after the button's logic, which would otherwise result in the card closing and then instantly reopening.
