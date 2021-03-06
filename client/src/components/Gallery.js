import { Grid } from "@mui/material";
import Image from "./Image";

const Gallery = props => {
	return (
		<Grid container direction="row" justify="center" alignItems="center" 
			spacing={1}>
			{props.images
				.map((image, index) => {
					return (
						<Grid item key={index} xs={6} sm={6} md={4} lg={4} xl={4}>
							<Image url={image.url} title={image.url} />      
						</Grid>
					);
			})}
		</Grid> 
  	);
};

export default Gallery;