import { Button, Modal } from 'antd';
import 'antd/dist/antd.css';
import React, { useState } from 'react';
import "./modal.scss"
import {Root,id} from "../../../typescript/findLaunchDetailsTS"
import {useQuery} from '@apollo/client'
import {FindLaunchDetail} from "../../../graphql/quries/findLunchDetails"


const MainTableModal = () => {
  const {data,loading,error}=useQuery<Root,id>(FindLaunchDetail,{variables:{id:109}});
  console.log(data)

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
  
    return (
      <>
        <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
        <Modal onCancel={handleCancel} footer={null} bodyStyle={{height:"500px",width:"544px"}} 
        title={
        <div className='nav-container'>
          <div className='modal_logo_container' style={{display:"flex"}}>
          <div className="logo">
            <img className='logo_img' style={{height:"72px",width:"72px"}} src="/Assets/satellite.svg" alt="" />
          </div>
          <div className='logo_content' style={{marginLeft:"15px"}}>
            <div style={{display:"flex",margin:"0",padding:"0"}}>
              <h2 style={{fontSize:"18px",fontWeight:"500"}}>CRS-1</h2>
              <span>success</span>
            </div>
            <div>
              <h5>Falcon 9</h5>
            </div>
            <div>
              <a href="#"><img src="/Assets/NASA.svg"alt="" /></a>
              <a href="#"><img src="/Assets/wikipedia.svg"alt="" /></a>
              <a href="#"><img src="/Assets/youtube.svg"alt="" /></a>
            </div>
          </div>
          </div>
        </div>}
         visible={isModalVisible}>
          <div>
            <div className="desc">
            <p>sfjnsdjcnjwcjwcjkscjkwjkcsjkdcjkc k ckej ckj ck
              dsfdscdscdscsdcscscsdcsdcsdcscsdcsdcsdcdscdscscdscsdc
              sdcdscdsdcdscdscdscdscdscsdcdscsdcdscsdcdscsdcdscdscdsc
              sdcdscdscsdcdscsdcsdsdcsdcdscdscdscdscdscdscsdsdcdsds
              . <a href="#">wikipedia</a></p>
            </div>
            <div className="info_container">
              <div className='info'>
                <span>Flight Number</span>
                <span>9</span>
              </div>
              <div className='info'>
                <span>Mission Name</span>
                <span>9</span>
              </div>
              <div className='info'>
                <span>Rocket Type</span>
                <span>9</span>
              </div>
              <div className='info'>
                <span>Rocket Name</span>
                <span>9</span>
              </div>
              <div className='info'>
                <span>Manufacturer</span>
                <span>9</span>
              </div>
              <div className='info'>
                <span>Nationality</span>
                <span>9</span>
              </div>
              <div className='info'>
                <span>Launch Date</span>
                <span>9</span>
              </div>
              <div className='info'>
                <span>Payload Type</span>
                <span>9</span>
              </div>
              <div className='info'>
                <span >Orbit</span>
                <span>9</span>
              </div>
              <div className='info'>
                <span>Launch Site</span>
                <span>9</span>
              </div>

            </div>
            </div>
        </Modal>
      </>
    );
}

export default MainTableModal