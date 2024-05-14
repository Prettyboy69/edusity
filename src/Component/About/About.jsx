
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>

        <div className="about-left"> 
        <img src={about_img} alt=""  className='about-img'/>
        <img src={play_icon} alt=""  className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>

        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow Leaders Today</h2>
            <p>Embarking on a  transformative educational journey with our 
                university comprehensive education programs
                our cutting edge  circulums is designed  to empower student with the knowledge ,
                skills, and experiences need to excel in the dynamic field of education

            </p>
            <p>
                with a focus on innovation, hands-on lerning and personalized mentorship, our programs prepare aspiring educators to make a  meaningful impact in classrooms, schools, and communities

            </p>
            <p>
                whether you aspire to become a teacher , administrator,
                connselor, or educational leader, our diverse range of programs
                offers the perfect pathway to achieve your goal and unlock your full potential in shaping the future of education
            </p>
        </div>

    </div>
  )
}

export default About