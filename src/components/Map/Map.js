import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE  } from 'react-native-maps';

let { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 13.08;
const LONGITUDE = 80.17;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class Map extends React.Component {
    static navigationOptions = {
        title: 'Map'
    };
  state = {
    region: {
      latitude: LATITUDE,
      longitude: LONGITUDE,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    }
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }
        });
      },
      (error) => console.log(error.message),
      { enableHighAccuracy: true, timeout: 60000, maximumAge: 1000 },
    );
    // this.watchID = navigator.geolocation.watchPosition(
    //   position => {
    //     this.setState({
    //       region: {
    //         latitude: position.coords.latitude,
    //         longitude: position.coords.longitude,
    //         latitudeDelta: LATITUDE_DELTA,
    //         longitudeDelta: LONGITUDE_DELTA,
    //       }
    //     });
    //   }
    // );
  }
  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={{padding:10}}>Your current Location in map is displayed below</Text>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.container}
          // customMapStyle={RetroMapStyles}
          showsUserLocation={true}
          zoomEnabled={true}
          minZoomLevel={4}
          maxZoomLevel={20}
          loadingEnabled={true}
          scrollEnabled={true}
          rotateEnabled={true}
          // moveOnMarkerPress={true}
          // showsTraffic={true}
          region={this.state.region}
          // onRegionChange={region => this.setState({ region })}
          // onRegionChangeComplete={region => this.setState({ region })}
        >

        {/* For customMapStyle */}
          {/* <MapView.Marker
            coordinate={this.state.region}
          >
          <View style={styles.radious}>
            <View style={styles.marker} />
          </View>
          </MapView.Marker> */}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%'
  },
});

export default Map;