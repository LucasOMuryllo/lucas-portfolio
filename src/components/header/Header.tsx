import Image from 'next/image'

import "../header/Header.scss";

export function Header(){
    return(
        <div className="header">
          <div>
            <h1>Hi, i´m Lucas Muryllo! 👋</h1>
            <h2>Front End Developer</h2>
          </div>
          <Image
            src="/me.jpg"
            alt="Profile Photo"
            width={325}
            height={310}
            priority
          />
        </div>
    )
}