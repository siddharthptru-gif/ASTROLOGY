import React, { useState } from 'react';
import { useNavigation } from '@hooks/useNavigation';
import { useUser } from '@context/UserContext';
import { useLanguage } from '@hooks/useLanguage';
import { useApp } from '@context/AppContext';
import { validateProfile } from '@utils/validators';
import { calculateZodiacSign } from '@utils/dateUtils';
import Input from '@components/ui/Input';
import Select from '@components/ui/Select';
import DatePicker from '@components/ui/DatePicker';
import TimePicker from '@components/ui/TimePicker';
import Button from '@components/ui/Button';
import AnimatedBackground from '@components/ui/AnimatedBackground';
import GlassCard from '@components/ui/GlassCard';

const ProfileSetupScreen = () => {
  const { resetNavigation } = useNavigation();
  const { userProfile, updateUserProfile } = useUser();
  const { completeOnboarding } = useApp();
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: userProfile.name || '',
    dob: userProfile.dob || '',
    timeOfBirth: userProfile.timeOfBirth || '',
    gender: userProfile.gender || ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error on change
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const handleSubmit = () => {
    const { isValid, errors: validationErrors } = validateProfile(formData);
    
    if (!isValid) {
      setErrors(validationErrors);
      return;
    }

    // Auto-calculate Zodiac
    const zodiacSign = calculateZodiacSign(formData.dob);

    updateUserProfile({
      ...formData,
      zodiacSign
    });

    completeOnboarding();
    resetNavigation('home');
  };

  return (
    <div className="relative min-h-screen flex flex-col p-6 pt-12 overflow-y-auto">
      <AnimatedBackground />

      <div className="relative z-10 max-w-md mx-auto w-full">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">{t('profile.title')}</h1>
          <p className="text-white/60">{t('profile.subtitle')}</p>
        </div>

        <GlassCard className="space-y-6">
          <Input
            label={t('profile.nameLabel')}
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            error={errors.name}
            placeholder="Enter your name"
          />

          <DatePicker
            label={t('profile.dobLabel')}
            value={formData.dob}
            onChange={(e) => handleChange('dob', e.target.value)}
            error={errors.dob}
          />

          <TimePicker
            label={t('profile.timeLabel')}
            value={formData.timeOfBirth}
            onChange={(e) => handleChange('timeOfBirth', e.target.value)}
          />

          <Select
            label={t('profile.genderLabel')}
            value={formData.gender}
            onChange={(e) => handleChange('gender', e.target.value)}
            error={errors.gender}
            options={[
              { value: 'male', label: t('profile.genderMale') },
              { value: 'female', label: t('profile.genderFemale') },
              { value: 'other', label: t('profile.genderOther') },
            ]}
          />

          <div className="pt-4">
            <Button 
              fullWidth 
              size="lg" 
              onClick={handleSubmit}
              className="shadow-glow-purple"
            >
              {t('profile.saveProfile')}
            </Button>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default ProfileSetupScreen;
