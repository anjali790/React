import React, { useState } from 'react';

export function Footer() {
    let currentTime = new Date().toLocaleTimeString();

    const [time, setTime] = useState(currentTime);

    const timer = () => {
        currentTime = new Date().toLocaleTimeString();
        setTime(currentTime);
    }

    setInterval(timer, 1000);

    return (
        <>
            <footer>
                <div className='current_time'>
                    <div>
                        <img width="180px" height="40px" src="https://i0.wp.com/therealnews.com/wp-content/uploads/2022/08/lockup-duochrome-bright-1.png?resize=2048%2C406&ssl=1" alt=""></img>
                    </div>
                    <div className='footer_link_div'>
                        <span>{time}</span>
                        <a href='https://www.facebook.com'><i class="fa-brands fa-facebook"></i></a>
                        <a href='https://www.twitter.com'><i class="fa-brands fa-twitter"></i></a>
                        <a href='https://www.instagram.com'><i class="fa-brands fa-instagram"></i></a>
                        <a href='https://www.youtube.com'><i class="fa-brands fa-youtube"></i></a>
                    </div>
                </div>
            </footer>
        </>
    )
}