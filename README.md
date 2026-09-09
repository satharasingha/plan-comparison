# Plan Comparison
## Project Notes

This project provides an easy way to compare different plans and their features.

The goal is to present the information clearly and make the comparison simple for users.
## Overview

This is a responsive, accessible comparison page for three plans across 15 features.

## Narrow-screen treatment

The desktop presentation uses a conventional four-column comparison table because it makes side-by-side comparison quick and readable on wider screens.

At narrow widths, the table is transformed into **one feature card per row**. Each card contains the feature name followed by the Starter, Professional, and Business values. The column headings are visually hidden in the desktop table header, but each mobile value receives a visible plan label through CSS. This avoids horizontal scrolling at 320px while preserving the relationship between each value and its plan.

I chose stacked feature cards instead of a horizontally scrollable table because the brief explicitly requires no horizontal scrolling at 320px. The stacked treatment also keeps each comparison unit readable without forcing users to pan back and forth.

## Accessibility

- Uses a real `<table>` with `<caption>`, `<thead>`, `<tbody>`, `<th scope="col">`, and `<th scope="row">`.
- The comparison structure is therefore conveyed semantically to assistive technology rather than relying only on visual styling.
- The “Show differences only” control is a native checkbox, so it is keyboard operable.
- Plan actions are native links and remain in DOM/visual order.
- All interactive controls have visible `:focus-visible` styling.
- The live region announces whether all features or differences only are displayed.
- Hidden rows use the `hidden` attribute, so they are removed from the accessibility tree while the filter is active.

## Keyboard behavior

The tab order follows the DOM order: the comparison filter comes first, followed by the plan actions from left to right. There are no custom keyboard interactions required.

## Running

Open `index.html` in a browser.
