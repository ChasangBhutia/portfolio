import myImg from "../../Assets/IMG_2020.png";

const RightContainer = () => {

    return (
        <section className="rightContainer flex-box">
            <div className="homeImg">
                <div className="imgBox flex-box">
                    <div className="imgItem flex-box">
                        <img
                            loading="lazy"
                            src={myImg}
                            alt=""
                            
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RightContainer;