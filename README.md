# Kungfu Animations
CSS animations for Gutenberg blocks  

`Kungfu Animations` is a small plugin that exposes CSS animation settings for Gutenberg blocks.  
Headstart on the animations provided by [Animate.css](https://animate.style/).  

## Installation

Install like you would any other WordPress plugin. 

## Customize

This plugin uses IntersectionObserver to fire animations when target elements are onscreen. That can be modified in /assets/oberver.js.  

You can also extend the disallowed array in src/disallowed to further limit which blocks are animatable. Currently, the only disallowed blocks are: 

```javascript
['core/group', 'core/cover']
```
