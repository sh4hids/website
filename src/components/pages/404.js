import React, {Component} from 'react';
import {Grid, GridCol} from '../atoms/Grid';
import Four0Four from '../molecules/Four0Four';
import {Helmet} from "react-helmet";

class NotFoundPage extends Component {
  render() {
    return (<Grid responsiveSm="responsiveSm" gutterless="gutterless" bordered="bordered" bw="2" bc="#000">
      <Helmet>
        <title>@shahid's | 404</title>
      </Helmet>
      <GridCol>
        <Four0Four/>
      </GridCol>
    </Grid>);
  }
}

export default NotFoundPage;
