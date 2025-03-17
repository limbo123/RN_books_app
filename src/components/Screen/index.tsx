import React, {memo} from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet, View} from 'react-native';
import {SafeAreaView, Edge} from 'react-native-safe-area-context';
import {styles} from './styles';

interface ScreenProps {
  children?: any;
  isDisabledEdges?: boolean;
  edges?: Edge[];
}

const Screen: React.FC<ScreenProps> = ({children, isDisabledEdges, edges}) => {
  const renderLayout = () => (
    <View style={[styles.contentBox]}>{children}</View>
  );
  const renderAndroidLayout = () => renderLayout();

  const renderIOSLayout = () => (
    <KeyboardAvoidingView behavior="padding" style={styles.fullSizeContainer}>
      {renderLayout()}
    </KeyboardAvoidingView>
  );

  const renderContent = () =>
    Platform.OS === 'android' ? renderAndroidLayout() : renderIOSLayout();

  return (
    <SafeAreaView
      style={styles.safeAreaContainer}
      edges={isDisabledEdges ? [] : edges || undefined}>
      {renderContent()}
    </SafeAreaView>
  );
};

export default memo(Screen);
