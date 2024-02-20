import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

export default function CourtCards({ court }) {
  const navigate = useNavigate();

  const openCourtDetails = () => {
    navigate(`/courtDetails/${court._id}`);
  };

  return (
    <MDBCard style={{ width: '18rem' }} className='col-12 col-md-3 col-lg-4 col-xl-2 col-xxl-1' onClick={openCourtDetails}>
      {court && court.courtPic && (
        <MDBCardImage src={`${process.env.REACT_APP_BE_URL}/images/${court.courtPic}`} position='top' alt='Court Image' />
      )}
      <MDBCardBody>
        <MDBCardTitle>{court && court.courtName}</MDBCardTitle>
        <MDBCardTitle tag='small' className='text-muted font-monospace'>{court && court.location}</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  );
}
