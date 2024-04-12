import { MessageCard, MESSAGE_VARIANT } from '@manulife/mux';
import { H3 } from '@manulife/mux';

const EmployeeDetails = ({ details }) => {

  return <div>

<MessageCard variant={MESSAGE_VARIANT.PRIMARY_COMPLETE} titleText={'Details'} hasCloseButton>
  <H3>DOB: {details.dob}</H3>
  <H3>Department: {details.department}</H3>
  <H3>Title: {details.title}</H3>
  </MessageCard>
</div>
}

export default EmployeeDetails;
