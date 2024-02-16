
import style from './ThirdBlock.module.css'

export default function ThirdBlock() {
    return (

        <>
            <div className={style.rootStyle}>
           
                <p className={style.firstRow}>
                Приехав к нам однажды, многие наши клиенты становятся постоянными, а часть из них даже друзьями.
                </p>

                <p className={style.secondRow}>
                А также в нашей мастерской можно отремонтировать электросамокат и электровелосипед.
                </p>

              
            </div>
          
        </>
    )
}