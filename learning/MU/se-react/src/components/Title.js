import { H2 } from '@manulife/mux';

const Title = (props) => {
  const  { text, style, className } = props;
  return <H2>{text}</H2>
}

export default Title;
