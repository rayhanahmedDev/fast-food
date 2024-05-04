import bannerImg from '../assets/banner.webp'

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${bannerImg})` }}>
                {/* <div className="hero-overlay bg-opacity-60"></div> */}
                <div className="hero-content text-center text-white">
                    <div className="max-w-xl">
                        <p >Style Destination</p>
                        <h1 className="mb-5 text-7xl font-medium">Sausage Pizza</h1>
                        <p className="mb-5">It is a long established fact a reader will be distracted <br />  by the readable content of a page when</p>
                        <button className="btn btn-outline text-white uppercase">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;