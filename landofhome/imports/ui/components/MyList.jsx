import React from 'react';
// import StyleSheet from 'react-style';
//
// const styles = StyleSheet.create({
//   primary: {
//     background: 'green'
//   },
//   warning: {
//     background: 'yellow'
//   },
//   button: {
//     padding: '1em'
//   },
//   // media queries
//   '@media (max-width: 200px)': {
//     button: {
//       width: '100%'
//     }
//   }
// });

export default class MyList extends React.Component {
	render() {

		const myStyle = {
			text: {
				fontFamily: 'monospace',
				color: 'red'
			}
		}

		return(
			<div>
				<h3 style={myStyle.text}>{this.props.listName}</h3>
				<ul className="list-group">
					{this.props.tasks.map((task) => (
						<MyTask key={task.id} task={task} onTaskClick={this.props.onTaskClick} />
					))}
				</ul>
			</div>
		);
	}
}
MyList.propTypes = {
	listName: React.PropTypes.string.isRequired,
	tasks: React.PropTypes.array.isRequired,
	onTaskClick: React.PropTypes.func.isRequired
}



export class MyTask extends React.Component {
	render() {
		return (
			<li className="list-group-item" onClick={this.props.onTaskClick}>{this.props.task.text}</li>
		);
	}
}
MyTask.propTypes = {
	task: React.PropTypes.object.isRequired,
	onTaskClick: React.PropTypes.func.isRequired
}
