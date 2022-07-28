import { Button, Modal } from 'antd';
import 'antd/dist/antd.css';
import React, { useState } from 'react';
import "./modal.scss"
import {Root,id} from "../../../typescript/findLaunchDetailsTS"
import {useQuery} from '@apollo/client'
import {FindLaunchDetail} from "../../../graphql/quries/findLunchDetails"

interface Props{
  rowID:number,
  handleCancel:()=>void,
  isModalVisible:boolean,
}

const MainTableModal = ({rowID, handleCancel,isModalVisible}:Props) => {
  const {data,loading,error}=useQuery<Root,id>(FindLaunchDetail,{variables:{id:rowID}});
  console.log(data?.launch)

    // const [isModalVisible, setIsModalVisible] = useState(false);

    // const showModal = () => {
    //   setIsModalVisible(true);
    // };
  
    // const handleOk = () => {
    //   setIsModalVisible(false);
    // };
  
    // const handleCancel = () => {
    //   setIsModalVisible(false);
    // };
  
    return (
      <>
        <Modal confirmLoading={loading} onCancel={handleCancel} footer={null} bodyStyle={{height:"500px",width:"544px"}} 
        title={
        <div className='nav-container'>
          <div className='modal_logo_container' style={{display:"flex"}}>
          <div className="logo">
            <img className='logo_img' style={{height:"72px",width:"72px"}} src="/Assets/satellite.svg" alt="" />
          </div>
          <div className='logo_content' style={{marginLeft:"15px"}}>
            <div style={{display:"flex",margin:"0",padding:"0"}}>
              <h2 style={{fontSize:"18px",fontWeight:"500"}}>{data?.launch.mission_name}</h2>
              <span>success</span>
            </div>
            <div>
              <h5>{data?.launch.rocket.rocket_name}</h5>
            </div>
            <div>
              <a href={data?.launch.links.wikipedia}><img src="/Assets/NASA.svg"alt="" /></a>
              <a href={data?.launch.links.video_link}><img src="/Assets/wikipedia.svg"alt="" /></a>
              <a href="#"><img src="/Assets/youtube.svg"alt="" /></a>
            </div>
          </div>
          </div>
        </div>}
         visible={isModalVisible}>
          <div>
            <div className="desc">
            <p>{data?.launch.rocket.rocket.description}<a href={data?.launch.links.wikipedia}>wikipedia</a></p>
            </div>
            <div className="info_container">
              <div className='info'>
                <span>Flight Number</span>
                <span>9</span>
              </div>
              <div className='info'>
                <span>Mission Name</span>
                <span>{data?.launch.mission_name}</span>
              </div>
              <div className='info'>
                <span>Rocket Type</span>
                <span>{data?.launch.rocket.rocket_type}</span>
              </div>
              <div className='info'>
                <span>Rocket Name</span>
                <span>{data?.launch.rocket.rocket_name}</span>
              </div>
              <div className='info'>
                <span>Manufacturer</span>
                <span>{data?.launch.rocket.second_stage.payloads[0].manufacturer}</span>
              </div>
              <div className='info'>
                <span>Nationality</span>
                <span>{data?.launch.rocket.second_stage.payloads[0].nationality}</span>
              </div>
              <div className='info'>
                <span>Launch Date</span>
                <span>{data?.launch.launch_date_local}</span>
              </div>
              <div className='info'>
                <span>Payload Type</span>
                <span>{data?.launch.rocket.second_stage.payloads[0].payload_type}</span>
              </div>
              <div className='info'>
                <span >Orbit</span>
                <span>{data?.launch.rocket.second_stage.payloads[0].orbit}</span>
              </div>
              <div className='info'>
                <span >Launch Site</span>
                <span>{data?.launch.launch_site.site_name}</span>
              </div>

            </div>
            </div>
        </Modal>
      </>
    );
}

export default MainTableModal