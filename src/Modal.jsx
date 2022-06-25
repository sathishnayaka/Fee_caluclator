import ReactModal from 'react-modal';
import CloseIcon from './CloseIcon.png'

const styles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		minWidth: '300px',
		width: '30%',
		transform: 'translate(-50%, -50%)',
		borderRadius: 10,
		padding: '20px 30px',
		fontFamily: 'Nunito',
	},
	overlay: {
		backgroundColor: 'rgba(0, 0, 0, 0.3)',
	},
};

export default function Modal(props) {
	return (
		<ReactModal isOpen="true" style={styles}>
			<div>
				<img
					src={CloseIcon}
					alt="Close Icon"
				/>
			</div>
			<div><p>
            We maintain that accessibility is a key component of any modern web application. As such, we have created this modal in such a way that it fulfills the accessibility requirements of the modern web. We seek to keep the focus on accessibility while providing a functional, capable modal component for general use.
                </p></div>
		</ReactModal>
	);
}
