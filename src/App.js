import "./App.css";
import { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";

function App() {
	const [showModal, setShowModal] = useState(false);
	const [showEvents, setShowEvents] = useState(true);
	const [events, setEvents] = useState([
		{ title: "Mario's birthday bash", id: 1 },
		{ title: "Bowser's live stream", id: 2 },
		{ title: "race on moo moo farm", id: 3 },
	]);

	console.log(showModal);

	const handleClick = (id) => {
		setEvents((prevEvents) => {
			return prevEvents.filter((event) => {
				return id !== event.id;
			});
		});
	};

	const handleClose = () => {
		setShowModal(false);
	};

	const subtitle = "All the latest events in Mario Kingdom";

	return (
		<div className="App">
			<Title title="Events in your area" subtitle={subtitle} />
			{showEvents && (
				<div>
					<button onClick={() => setShowEvents(false)}>hide events</button>
				</div>
			)}
			{!showEvents && (
				<div>
					<button onClick={() => setShowEvents(true)}>show events</button>
				</div>
			)}
			{showEvents && <EventList events={events} handleClick={handleClick}/>}
			{/* 			<Modal>
				<h2>10% Off Coupon Code!!</h2>
				<p>Use the code NINJA10 at the checkout.</p>
			</Modal> */}
			{showModal && (
				<Modal handleClose={handleClose}>
					<h2>Terms and Conditions</h2>
					<p>
						Nisi elit fugiat non esse amet in officia amet Lorem sit quis et id
						ex. Pariatur deserunt ut sunt sunt ex. Magna magna excepteur eiusmod
						eiusmod deserunt ipsum qui mollit ad. Et nostrud sint ad ullamco
						cupidatat culpa dolore est dolor culpa reprehenderit commodo aliquip
						incididunt.
					</p>
				</Modal>
			)}
			<div>
				<button onClick={() => setShowModal(true)}>
					Read Terms and Conditions
				</button>
			</div>
		</div>
	);
}

export default App;
