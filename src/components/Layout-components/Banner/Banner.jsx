import React from 'react'
import "./Banner.css"
import { navigate } from '../../../Data/Navigation'
import { Link } from 'react-router-dom'
// import Bitmap from '../../../assets/Bitmap.svg'
import Button from '../../Reuseable-components/Button/Button'
import Input from "../../Reuseable-components/Input/Input"
const Banner = () => {
  return (
    <div>

      <nav>
        {/* <div className="logo">
    <img src={Bitmap} alt="" />
        </div> */}
        {navigate.map((ref, id)=>(
          <ul key={id}>
            <li>
              <Link to={ref.to}>{ref.path}</Link>
            </li>
          </ul>
        ))}
      </nav>

      <main>
        <Button className='look'>cool</Button>
        <Input type='text' />
      </main>
    </div>
  )
}

export default Banner