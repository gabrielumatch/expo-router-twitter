import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

interface ButtonProps {
  onPress: () => void;
  label: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  labelStyle?: TextStyle;
}

export default function Button({
  onPress,
  label,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  style,
  labelStyle,
}: ButtonProps) {
  const getBackgroundColor = () => {
    if (disabled) return '#A5A5A5';
    switch (variant) {
      case 'primary':
        return '#1DA1F2';
      case 'secondary':
        return '#EFF3F4';
      case 'outline':
        return 'transparent';
      default:
        return '#1DA1F2';
    }
  };

  const getTextColor = () => {
    if (disabled) return '#FFFFFF';
    switch (variant) {
      case 'primary':
        return '#FFFFFF';
      case 'secondary':
      case 'outline':
        return '#0F1419';
      default:
        return '#FFFFFF';
    }
  };

  const getPadding = () => {
    switch (size) {
      case 'small':
        return { paddingVertical: 8, paddingHorizontal: 16 };
      case 'large':
        return { paddingVertical: 16, paddingHorizontal: 32 };
      default:
        return { paddingVertical: 12, paddingHorizontal: 24 };
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        styles.button,
        {
          backgroundColor: getBackgroundColor(),
          borderWidth: variant === 'outline' ? 1 : 0,
          borderColor: '#1DA1F2',
          ...getPadding(),
        },
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={getTextColor()} />
      ) : (
        <Text style={[styles.label, { color: getTextColor() }, labelStyle]}>{label}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 9999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
  },
});
