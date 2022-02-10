import React from 'react';
import styles from './details.module.css'

const Details = (props) => {
    const onCloseDetails = () =>{
        props.onCloseDetails()
    }
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <p>
                    무언가를 발명하고 만들어내는 것을 좋아해, 한양대학교 기계공학과를 졸업하였지만
                    생각한 것을 만들어내는 것은 기계공학과의 취직과는 거리가 멀었습니다.</p>
                <p>
                    그래서 최신기술에 가까이 있는 직업을 생각해 보아, 변리사를 3년간 준비했으나 실패하여
                    깔끔하게 포기하고, 진정 내가 하고싶은 것이 뭘까를 더욱 고민하게 되었습니다. 
                </p>
                <p>
                    그렇게 고민한 결과, 컴퓨터로 생각한 것을 만들어보고 구현해보는
                    개발자를 생각하게 되었고, 지금까지 공부해보니 매우 매력적이였고 진정한 꿈을 찾았다는 느낌이 듭니다.
                </p>
                <p>
                    실패한 모든 경험들과 시간들은 매우 아깝지만
                    극한까지의 노력, 역경을 극복하는 멘탈, 또한
                    제가 진정 희망하던 직업을 찾게해주었습니다(자기위로일지라도ㅎㅎ)
                </p>
                <p>
                    빠른 성장으로 저의 실패를 성공의 밑거름으로 바꾸기 위해 노력할 것입니다.
                </p>
               
            </div>
            <div className={styles.exit} onClick={onCloseDetails}>닫기</div>
            
        </div>
    );
};

export default Details;