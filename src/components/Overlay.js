import React, { forwardRef } from 'react';

const Overlay = forwardRef(({ caption, scroll }, ref) => (
    <div
        ref={ref}
        onScroll={(e) => {
            if (window.innerWidth > 800) {
                scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)
            } else {
                scroll.current = e.target.scrollLeft / (e.target.scrollWidth - window.innerWidth)   
            }
            let progress = scroll.current.toFixed(2)
            let grad = ((progress * 360) / 1).toFixed(0)
            caption.current.innerText = `${grad}°`
        }}
        className="scroll">
        <div className="slide">
            0°
        </div>
        <div className="slide">
            90°
        </div>
        <div className="slide">
            180°
        </div>
        <div className="slide">
            270°
        </div>
        <span className="caption" ref={caption}>
            0°
        </span>
    </div>
))

export default Overlay;