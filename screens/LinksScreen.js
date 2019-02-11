import React from 'react';
import { View, ScrollView, StyleSheet, Text} from 'react-native';
import { CalendarList, Agenda } from 'react-native-calendars';

export default class LinksScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentDay: "Current Day Default Text"
    }
  }
  static navigationOptions = {
    title: 'Calendar',
  };

  render() {
    return (
      <ScrollView 
      contentContainerStyle={{ flex: 1, justifyContent: 'space-between', flexDirection: 'column' }}
      style={styles.container}>
      <View style={{ flex: 1.1, justifyContent: 'flex-start' }}>
        <CalendarList 
        onDayPress={(day) => {this.setState({currentDay: day.dateString})}}
        pastScrollRange={12} 
        futureScrollRange={12}
        theme={{
          calendarBackground: '#eeeeee',
          selectedDayBackgroundColor: 'blue',
          selectedDayTextColor: '#ffffff',
          
        }}
        markingType={'custom'}
       
        markedDates={{
          '2019-02-01': {
            customStyles: {
              container: {
                backgroundColor: 'blue',
                borderRadius: 0,
                
              },
              text: {
                color: 'white',
                fontWeight: 'bold'
              },
            },
          },
          '2019-02-02': {
            customStyles: {
              container: {
                backgroundColor: 'green',
                borderRadius: 0,
                margin: 0,
                padding: 0,
                
              },
              text: {
                color: 'white',
                fontWeight: 'bold'
              },
            }
          }}} />
          </View>
          <View style={{ flex: 1, justifyContent: 'flex-end' }}>
   
  
         <Text>{this.state.currentDay}</Text> 
    </View>
       
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',

  },
  dayHeader: {
    marginTop: 2,
    marginBottom: 20,
    width: 32,
    textAlign: 'center',

  },
  calendar: {
    borderTopWidth: 1,
    paddingTop: 0,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 100,
    paddingLeft: 1,
    paddingRight: 1,
    margin: 0
    
  },
  text: {
    textAlign: 'center',
    borderColor: '#bbb',
    padding: 0,
    backgroundColor: '#eee'
  },

});
