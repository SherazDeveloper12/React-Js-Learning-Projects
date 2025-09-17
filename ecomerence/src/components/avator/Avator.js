import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Styles from './avator.module.css'
export default function ImageAvatars(props) {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar className={Styles.avatorimg} alt={props.name} src={props.image}  />
    </Stack>
  );
}