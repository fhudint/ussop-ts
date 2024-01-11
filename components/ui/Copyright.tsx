import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary">
      {'All right reserved © Copyright '}
      {new Date().getFullYear()}{', '}
      <Link color="inherit" href="">
        Ussop
      </Link>
      {'.'}
    </Typography>
  );
}

export default Copyright;