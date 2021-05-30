import React, { useState, useEffect } from "react";
import { CustomDialog} from 'react-st-modal';

const openModal= async (ModalComponent) => {
	const result = await CustomDialog(
		<ModalComponent />,
		{
			title: ' ',
			showCloseIcon: true,
		}
	);
}

export default openModal;