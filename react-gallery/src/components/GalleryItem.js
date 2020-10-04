import React from "react";


const GalleryItem = ({ farm, server, id, secret, title }) => {
	return (
		<li>
			<img 
				src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`}
				alt={title} />
		</li>
	)
};

export default GalleryItem;