import React from 'react';

class PageTitle extends React.Component {
    render () {
        return (
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                <h1 class="h2">{this.props.title}</h1>
            </div>
        );
    }
}

 export default PageTitle;