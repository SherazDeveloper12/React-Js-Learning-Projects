import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import './avator.css'
export default function ImageAvatars(props) {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar className="avatorimg" alt={props.name} src={props.image}  />
    </Stack>
  );
}