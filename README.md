# Double Vertical Slider

<img width="1429" alt="Screenshot" src="images/screenshot.png">

#### project notes

1. HTML
- 1/3 text section, 2/3 image section
- buttons(up/down)

2. CSS
- buttons(up/down) at the line and in the middle of Y-axis
- can make it responsive

3. JavaScript
- click eventListener
- text section and image section move to different direction: text down, image up

+ Challenge from Brad Traversy & Florin Pop on Udemy '50 Projects in 50 Days'

#### Takeaways from the instructor

1. HTML
- left slides wrapped in one div, right slides wrapped in another div: first text goes with last image.
- background-color inline style

3. JavaScript
```
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`
```
```
slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
```