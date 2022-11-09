import React from "react";

type ProfileStatusPropsType = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {


    state = {
        editMode: false,
        status: this.props.status
    };

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode=()=> {
        this.setState({
            editMode: false
        })

    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }

    }

    render() {
        return <div>
            {this.state.editMode
                ? <div>
                    <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
                </div>
                : <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                </div>
            }
        </div>;
    }
}