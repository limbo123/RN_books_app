import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  detailsContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
    marginTop: -20,
    paddingBottom: 40,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingHorizontal: 38,
  },
  divider: {
    height: 1,
    backgroundColor: '#D9D5D6',
    margin: 16,
    marginTop: 0,
  },
  summarySection: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  sectionTitle: {
    marginBottom: 5,
  },
  summaryText: {
    lineHeight: 20,
  },
});
