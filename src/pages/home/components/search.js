import React, { Component } from "react";
import { connect } from 'react-redux';
import { findComics } from '../actions';
import Autocomplete from 'react-autocomplete';

class SearchChar extends Component {
    render() {
        return (
            <React.Fragment>
                <Autocomplete
                    items={this.props.chars}
                    inputProps={{ id: 'states-autocomplete' }}
                    shouldItemRender={(item, value) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1}
                    getItemValue={item => item.name}
                    wrapperStyle={{ position: 'relative', display: 'block' }}
                    renderMenu={children => (
                        <div className="result-autocomplete">
                           {children}
                        </div>
                    )}
                    renderItem={(item, isHighlighted) => (
                        <div
                            className={`option item ${isHighlighted ? 'option item-highlighted' : ''}`}
                            key={item.id}
                        >
                           {item.name}
                        </div>
                    )}
                    renderInput={(props) => (
                        <React.Fragment>
                            <form className="wrapper-search"
                                onSubmit={(event) => { event.preventDefault(); this.props.findComics(this.props.char) }}>
                                <input {...props} placeholder="Search your hero's comics" />
                                <button className="go" type="submit" name="search">
                                    <img alt="Lupa" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI1MC4zMTMgMjUwLjMxMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjUwLjMxMyAyNTAuMzEzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCI+CjxnIGlkPSJTZWFyY2giPgoJPHBhdGggc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkOyIgZD0iTTI0NC4xODYsMjE0LjYwNGwtNTQuMzc5LTU0LjM3OGMtMC4yODktMC4yODktMC42MjgtMC40OTEtMC45My0wLjc2ICAgYzEwLjctMTYuMjMxLDE2Ljk0NS0zNS42NiwxNi45NDUtNTYuNTU0QzIwNS44MjIsNDYuMDc1LDE1OS43NDcsMCwxMDIuOTExLDBTMCw0Ni4wNzUsMCwxMDIuOTExICAgYzAsNTYuODM1LDQ2LjA3NCwxMDIuOTExLDEwMi45MSwxMDIuOTExYzIwLjg5NSwwLDQwLjMyMy02LjI0NSw1Ni41NTQtMTYuOTQ1YzAuMjY5LDAuMzAxLDAuNDcsMC42NCwwLjc1OSwwLjkyOWw1NC4zOCw1NC4zOCAgIGM4LjE2OSw4LjE2OCwyMS40MTMsOC4xNjgsMjkuNTgzLDBDMjUyLjM1NCwyMzYuMDE3LDI1Mi4zNTQsMjIyLjc3MywyNDQuMTg2LDIxNC42MDR6IE0xMDIuOTExLDE3MC4xNDYgICBjLTM3LjEzNCwwLTY3LjIzNi0zMC4xMDItNjcuMjM2LTY3LjIzNWMwLTM3LjEzNCwzMC4xMDMtNjcuMjM2LDY3LjIzNi02Ny4yMzZjMzcuMTMyLDAsNjcuMjM1LDMwLjEwMyw2Ny4yMzUsNjcuMjM2ICAgQzE3MC4xNDYsMTQwLjA0NCwxNDAuMDQzLDE3MC4xNDYsMTAyLjkxMSwxNzAuMTQ2eiIgZmlsbD0iI2NjY2NjYyIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" />
                                </button>
                                <a href="#" className="logo" title="Api Marvel">
                                    <img alt="Logo Marvel" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8Zz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNENTAxMUQ7IiBkPSJNNDQyLDE3Mi41di0zMGgtNzguNjY1bC0yMy4zMDksMTM3LjA2OWwtMjYuODk3LTEzNi41MzRWMTQyLjVoLTMwLjY4MmwyLjg2NCwxNC41MzkgICBjLTExLjE2My04LjIwNC0yNC42NjktMTMuMzg4LTM5LjMxMS0xNC4zNTlsLTEwLDE1LjA0OGwxMCwxNS4wNDhjMjIuNDY4LDIuNDk2LDQwLDIxLjYwMSw0MCw0NC43MjRzLTE3LjUzMiw0Mi4yMjktNDAsNDQuNzI0ICAgbC0xMCwxNS4wNTVsMTAsMTUuMDU1YzQuMzctMC4yODksOC42My0wLjk3NCwxMi43NjYtMS45ODNsMjEuMDEsNzkuMTQ3aDMxLjAzOWwtMjQuNTAxLTkyLjI5NyAgIGM3LjQwNS01LjYzNCwxMy43My0xMi42MDgsMTguNjE4LTIwLjU2M0wzMjcuMTY3LDM2OS41aDI3Ljk5OEwzNzcsMjQxLjA5NVYzNjkuNWg2NXYtMzBoLTM1VjI3MWgzNXYtMzBoLTM1di02OC41SDQ0MnoiLz4KCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiNENTAxMUQ7IiBwb2ludHM9IjQ4MiwzMzkuNSA0ODIsMTQyLjUgNDUyLDE0Mi41IDQ1MiwzNjkuNSA1MTIsMzY5LjUgNTEyLDMzOS41ICAiLz4KPC9nPgo8cGF0aCBzdHlsZT0iZmlsbDojRkYwMDIxOyIgZD0iTTI0NiwxNDIuNjhjLTEuNjU0LTAuMTEtMy4zMTktMC4xOC01LTAuMThoLTI1djE1Ni4wMTlMMTgxLjU1LDE0Mi41aC0yNy4wOTlMMTI1LDI3NS44NzZWMTQyLjUgIEg5NC45NTFMNjIuMTUzLDI5MS4wMzNMMzAuMTA5LDE0Mi41SDB2MjI3aDMwdi04NS4yNDhMNDguMzkxLDM2OS41aDI3LjE1OEw5NSwyODEuNDEyVjM2OS41aDQwLjA0OWw4LjgzMi00MGg0OC4yMzdsOC44MzIsNDBIMjQ2ICBWMTQyLjY4eiBNMTUwLjUwNiwyOTkuNUwxNjgsMjIwLjI3NGwxNy40OTQsNzkuMjI3aC0zNC45ODhWMjk5LjV6Ii8+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" />
                                </a>
                            </form>
                        </React.Fragment>
                    )}
                    value={this.props.search}
                    onChange={(ev) => { this.props.autoCompleteOnChange(ev.target.value) }}
                    onSelect={(value, itemSelect) =>{this.props.onSelectItem(value, itemSelect.id)}}
                />
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        chars: state.home.chars
    };
};

export default connect(mapStateToProps, {
    findComics
})(SearchChar);