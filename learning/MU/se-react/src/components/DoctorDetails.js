import { MessageCard, MESSAGE_VARIANT } from '@manulife/mux';
import { H3 } from '@manulife/mux';

const DoctorDetails = ({ details }) => {
  //const {details} = props;

  return <div>

<MessageCard variant={MESSAGE_VARIANT.PRIMARY_COMPLETE} titleText={'Details'} hasCloseButton>
  <H3>DOB: {details.dob}</H3>
  <H3>Specialty: {details.specialty}</H3>
  <H3>Address: {details.address.street}, {details.address.city}</H3>
  </MessageCard>
</div>
}

export default DoctorDetails;
