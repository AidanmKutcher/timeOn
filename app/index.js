import { StyleSheet, View, Platform, TouchableOpacity, Image } from "react-native";
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Asset } from 'expo-asset';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// RNE imports
import { Button, Card, Text } from '@rneui/themed';

export default function HomePage() {
  if (Platform.OS == 'web') {
    return (
      <SafeAreaProvider>
        <LinearGradient
          colors={['#ffffff', '#ffffff']}
          style={styles.container}
          start={[0, 0]}
          end={[0, 3]}
        >
          {
            <View style={styles.container}>
              <View style={styles.contentContainer}>
                <TopBar />
                <MarketingContent />
                <PricingPlans />
                <Footer />
              </View>
            </View>
          }
        </LinearGradient>
      </SafeAreaProvider>
    )
  }
  else {
    // Mobile route logic 
    return (
      <SafeAreaProvider>
    <MobileHomePage />
    </SafeAreaProvider>
    )

  }
}

function MobileHomePage() {
  return (
      <View style={styles.container}>
          <View style={styles.logoContainer}>
              <Text style={styles.logo}>TimeOn</Text>
          </View>

          <View style={styles.buttonContainer}>
              <Button
                  title="Log In"
                  onPress={() => { }}
                  buttonStyle={styles.signinButton}
                  containerStyle={styles.buttonMargin}
              />

              <Button
                  title="Sign Up"
                  onPress={() => { }}
                  buttonStyle={styles.signupButton}
              />
          </View>
      </View>
  );
}


function TopBar() {
  return (
    <View style={styles.topBar}>
      <Text h4 style={styles.logo}>TimeOn</Text>
      <View style={styles.buttonsContainer}>
        <Button
          title="Log In"
          onPress={() => {changePageRegister() }}
          containerStyle={{ marginHorizontal: 5 }}
          buttonStyle={{ ...styles.roundedButton, backgroundColor: '#04AA6D' }} />
        <Button
          title="Sign Up"
          onPress={() => { }}
          containerStyle={{ marginHorizontal: 5 }}
          buttonStyle={{ ...styles.roundedButton, backgroundColor: '#04AA6D' }} />
      </View>
    </View>
  );
}

function changePageRegister()
{
  window.location = 'register.html';
}


function MarketingContent() {
  return (
    <Card containerStyle={styles.marketingContainer}>
      <Text>Marketing Content Here</Text>
    </Card>
  );
}

function PricingPlans() {
  return (
    <View style={styles.pricingContainer}>
      
      <TouchableOpacity style={styles.plan} onPress={() => {}}>
        <Text style={styles.planButton}>Basic Plan</Text>
        <Text style={styles.planDescription}>
          <Text style={styles.planPrice}>Free</Text>{"\n"}
          - Schedule up to 10 employees.{"\n"}
          - Single location management.{"\n"}
          - Basic reporting features.{"\n"}
          - Email support.
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.plan} onPress={() => {}}>
        <Text style={styles.planButton}>Premium Plan</Text>
        <Text style={styles.planDescription}>
          <Text style={styles.planPrice}>$20/month</Text>{"\n"}
          - Schedule unlimited employees.{"\n"}
          - Manage multiple locations.{"\n"}
          - Advanced reporting and analytics.{"\n"}
          - Priority email and chat support.{"\n"}
          - Employee shift swapping.{"\n"}
          - Time-off requests.
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.plan} onPress={() => {}}>
        <Text style={styles.planButton}>Enterprise Plan</Text>
        <Text style={styles.planDescription}>
          <Text style={styles.planPrice}>$40/month</Text>{"\n"}
          - All features of Premium Plan.{"\n"}
          - Dedicated account manager.{"\n"}
          - Custom integrations.{"\n"}
          - API Access.{"\n"}
          - Employee performance tracking.{"\n"}
          - Advanced security features.
        </Text>
      </TouchableOpacity>

    </View>
  );
}

function Footer() {
  return (
    <View style={styles.footer}>

      <View style={styles.footerTop}>
        <View style={styles.footerColumns}>

          <View>
            <Text style={styles.footerHeader}>Get to Know Us</Text>
            <TouchableOpacity><Text style={styles.footerLink}>About Us</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.footerLink}>Company Blog</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.footerLink}>Careers</Text></TouchableOpacity>
          </View>

          <View>
            <Text style={styles.footerHeader}>Let Us Help You</Text>
            <TouchableOpacity><Text style={styles.footerLink}>Support</Text></TouchableOpacity>
          </View>

        </View>

        <View style={styles.footerRight}>
          <View style={styles.footerApps}>
            <TouchableOpacity>
              <Image source={{ uri: 'https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/783bb4a82e5be29e.svg' }} style={styles.appIcon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={{ uri: 'https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/163bdc9b0f1e7c9e.png' }} style={styles.appIcon} />
            </TouchableOpacity>
          </View>

          <View style={styles.footerSocial}>
            <TouchableOpacity style={styles.socialIcon}>
              <Image source={require('../assets/facebook_icon.png')} style={styles.iconImage} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialIcon}>
              <Image source={require('../assets/twitter_icon.png')} style={styles.iconImage} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialIcon}>
              <Image source={require('../assets/instagram_icon.png')} style={styles.iconImage} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.footerTerms}>
        <TouchableOpacity><Text style={styles.footerLink}>Terms of Service</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.footerLink}>Privacy</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.footerLink}>California Privacy</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.footerLink}>Do Not Sell or Share My Personal Information</Text></TouchableOpacity>
        <Text>© TimeOn</Text>
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#04AA6D'
  },
  contentContainer: {
    flex: 1,
    width: '70%', // occupies 90% of the screen width
    alignSelf: 'center',
    paddingHorizontal: 20,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'rgba(50, 50, 50, 0.7)',
    borderRadius: 20,
    margin: 10,
    overflow: 'hidden'
  },
  logo: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  roundedButton: {
    borderRadius: 25,
    backgroundColor: '#007BFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  marketingContainer: {
    padding: 20,
    // ... additional styles for marketing content ...
  },
  pricingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  plan: {
    width: '30%',
    borderColor: '#e1e1e1',
    borderWidth: 1,
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 2,  // this is needed for Android
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  planButton: {
    fontSize: 20,
    color: '#333333',
    marginBottom: 10,
  },
  planDescription: {
    color: '#777777',
    lineHeight: 24,  // adjust as per design
    fontSize: 16,
    marginTop: 20,
  },
  planPrice: {
    fontSize: 18,
    color: '#333333',},
  buttonWithText: {
    flexDirection: 'column',
    alignItems: 'center'
  },

  footer: {
    padding: 20,
    backgroundColor: '#f7f7f7'
  },
  footerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  footerColumns: {
    flexDirection: 'column'
  },
  footerHeader: {
    fontWeight: 'bold',
    marginBottom: 10
  },
  footerLink: {
    textDecorationLine: 'underline',
    marginBottom: 5
  },
  footerRight: {
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  footerApps: {
    flexDirection: 'row'
  },
  appIcon: {
    width: 135,
    height: 40,
    marginRight: 10
  },
  footerSocial: {
    flexDirection: 'row',
    marginTop: 20
  },
  socialIcon: {
    marginHorizontal: 10
  },
  footerTerms: {
    marginTop: 20
  },
  iconImage: {
    width: 24,
    height: 24,
    resizeMode: 'contain'
  },
loginContainer: {
  flex: 1,
  backgroundColor: '#f5f5f5',
  alignItems: 'center',
  justifyContent: 'center',
},
logoContainer: {
  marginBottom: 50,
},
logo: {
  fontSize: 36,
  fontWeight: 'bold',
  color: '#04AA6D',
},
buttonContainer: {
  width: '80%',
},
signupButton: {
  backgroundColor: '#04AA6D',
  borderRadius: 25,
  paddingHorizontal: 15,
  paddingVertical: 10,
},
signinButton: {
  backgroundColor: '#333',
  borderRadius: 25,
  paddingHorizontal: 15,
  paddingVertical: 10,
},
buttonMargin: {
  marginBottom: 15,
},

});
