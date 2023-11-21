# Grade
HTML Code Quality: 3/5
CSS Code Quality: 4.5/5
Responsive Design: 4.5/5
Assignment Requirements: 4.75/5

Total: 16.75/20

## Comments
There is no need to cite my very old personal website in your README 😆 If you want to give me credit, just link to the MAD9013 site. I appreciate the care though.

### HTML
Search for `prof comment` in individual files for specific comments.

- `<br>` should only be used when a line break is semantically important to the content. For example in a poem, song lyrics, or address. It should NEVER be used to put space between elements. You should be using `margin`
  - You removed all of the default margin on most element in your CSS Reset, which you should avoid. You would not have needed to add all of the `<br>` tags if you hadn't.

### CSS
Search for `prof comment` in individual files for specific comments.

It looks like you are doing your own research and experimentation with CSS properties. That's great! When you are doing this though, make sure you properly research the properties you use to make sure you use them correctly. For example: you have implemented `zoom` which is an unsupported property, and have included unnecessary, out of dated browser prefixes in the animations.

### Responsive Design
- There is some inconsistency in the width and alignment of different section content. Ideally all sections should have the same width of container, and the same padding on the left and right, applied through the `.container`, to ensure everything lines up perfectly.

### Assignment Requirements
- Colour scheme should have been fully changed from in-class colours