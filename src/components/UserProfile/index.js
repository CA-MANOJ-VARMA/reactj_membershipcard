import { Component } from 'react'
import { jsPDF } from "jspdf";
import { BsDownload } from "react-icons/bs";
import './index.css'

class UserProfile extends Component {

    downloadCard = () =>{
        let doc =new jsPDF({
            orientation: "landscape",
            unit: "px",
            format: [760, 370]
          });
        doc.html(document.getElementById('css-membership-card-Id'),{
            callback: function(pdf) {
                pdf.save('membershipcard.pdf')
            }
            
        })
    }

    render(){

        return(
            <div className='css-userprofile-container'>
                <div className='css-download-button-react'>
                    <button type='button' onClick={this.downloadCard} className='css-download-icon'><BsDownload /></button>
                </div>
                <div className='css-membership-container' id='css-membership-card-Id'>
                    <div className='css-frontpart-container'>
                        <div className='css-frontpart-details-container'>
                            <ul className='css-ul-candidate-details'>
                                <li>Name:(Full Name (First name Last Name))</li>
                                <li>Phone Number:+91-xxxxx xxxxx</li>
                                <li>E-mail Address:(optional)</li>
                                <li>Address:(Full Address)</li>
                                <li>H.No/Street/Locality/Village:</li>
                                <li>Mandal:</li>
                                <li>District:</li>
                                <li>State:</li>
                                <li>Pin Code</li>
                                <br/>
                                <li>Membership type:</li>
                                <li>Membership Fees: Rs.</li>
                            </ul>
                        </div>
                        <div className='css-candidate-photo-container'>
                            <img src='./candidate.png' alt='candidate logo' className='css-candidate-image-itself'/>
                        </div>
                    </div>
                    <div className='css-backpart-container'>
                    <div className='css-backpart-details-photo-container'>
                    <img src='./companyLogo.jpg' alt='company logo' className='css-companylogo-image-itself'/>
                    </div>
                    <hr style={{
            color: 'black',
            backgroundColor: 'black',
            height: '1px',
            width:'320px',
        }}/>
                        <div className='css-candidate-address-container'>
                            <p>Address: Head Office Address</p>
                            <p>E-mail Address</p>
                            <p>Contact/Support/Toll Free Number</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserProfile