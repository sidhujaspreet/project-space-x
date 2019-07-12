import React from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import {LaunchItem} from "./LaunchItem";
import MissionKey from "./MissionKey";

const LAUNCES_QUERY = gql`
    query LaunchesQuery {
        launches {
            flight_number
            mission_name
            launch_date_local
            launch_success
        }
    }
`;

export class Launches extends React.Component {
    render() {
        return (
            <div>
                <h1 className="display-4 my-3">Launches</h1>
                <MissionKey/>
                <Query query={LAUNCES_QUERY}>
                    {
                        ({loading, error, data}) => {
                            if (loading) return <h4>Loading...</h4>
                            if (error) return console.log(error)

                            return (
                                <>
                                    {data.launches.map(launch => (
                                        <LaunchItem key={launch.flight_number} launch={launch}/>))}
                                </>
                            );
                        }
                    }
                </Query>
            </div>
        )
    }
}

export default Launches;
