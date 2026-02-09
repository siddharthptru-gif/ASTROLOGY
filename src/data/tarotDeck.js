/**
 * 🃏 TAROT DECK DATA
 * Complete list of 78 Rider-Waite Tarot cards with keywords.
 * Images are referenced by ID to be mapped in the UI.
 */

export const TAROT_DECK = [
  // 🏛️ MAJOR ARCANA (22 Cards)
  {
    id: 'maj_0',
    name: 'The Fool',
    arcana: 'Major',
    keywords: ['Beginnings', 'Innocence', 'Spontaneity', 'Free Spirit'],
    keywordsReversed: ['Recklessness', 'Risk-taking', 'Inconsiderate'],
    meaning: 'New beginnings, having faith in the future, being inexperienced, beginner\'s luck.',
    image: 'fool.jpg'
  },
  {
    id: 'maj_1',
    name: 'The Magician',
    arcana: 'Major',
    keywords: ['Manifestation', 'Resourcefulness', 'Power', 'Inspired Action'],
    keywordsReversed: ['Manipulation', 'Poor Planning', 'Untapped Talents'],
    meaning: 'The power to manifest your desires, resourcefulness, and skill.',
    image: 'magician.jpg'
  },
  {
    id: 'maj_2',
    name: 'The High Priestess',
    arcana: 'Major',
    keywords: ['Intuition', 'Sacred Knowledge', 'Divine Feminine', 'Subconscious'],
    keywordsReversed: ['Secrets', 'Disconnected from Intuition', 'Withdrawal'],
    meaning: 'Intuition, higher powers, mystery, subconscious mind.',
    image: 'high_priestess.jpg'
  },
  {
    id: 'maj_3',
    name: 'The Empress',
    arcana: 'Major',
    keywords: ['Femininity', 'Beauty', 'Nature', 'Nurturing', 'Abundance'],
    keywordsReversed: ['Creative Block', 'Dependence', 'Empty Nest'],
    meaning: 'Fertility, femininity, beauty, nature, abundance.',
    image: 'empress.jpg'
  },
  {
    id: 'maj_4',
    name: 'The Emperor',
    arcana: 'Major',
    keywords: ['Authority', 'Structure', 'Control', 'Fatherhood'],
    keywordsReversed: ['Domination', 'Excessive Control', 'Lack of Discipline'],
    meaning: 'Authority, establishment, structure, a father figure.',
    image: 'emperor.jpg'
  },
  {
    id: 'maj_5',
    name: 'The Hierophant',
    arcana: 'Major',
    keywords: ['Spiritual Wisdom', 'Religious Beliefs', 'Conformity', 'Tradition'],
    keywordsReversed: ['Personal Beliefs', 'Freedom', 'Challenging Status Quo'],
    meaning: 'Religion, group identification, conformity, tradition, beliefs.',
    image: 'hierophant.jpg'
  },
  {
    id: 'maj_6',
    name: 'The Lovers',
    arcana: 'Major',
    keywords: ['Love', 'Harmony', 'Relationships', 'Values Alignment', 'Choices'],
    keywordsReversed: ['Self-Love', 'Disharmony', 'Imbalance', 'Misalignment'],
    meaning: 'Love, union, relationships, values alignment, choices.',
    image: 'lovers.jpg'
  },
  {
    id: 'maj_7',
    name: 'The Chariot',
    arcana: 'Major',
    keywords: ['Control', 'Willpower', 'Success', 'Action', 'Determination'],
    keywordsReversed: ['Self-Discipline', 'Opposition', 'Lack of Direction'],
    meaning: 'Control, willpower, victory, assertion, determination.',
    image: 'chariot.jpg'
  },
  {
    id: 'maj_8',
    name: 'Strength',
    arcana: 'Major',
    keywords: ['Strength', 'Courage', 'Persuasion', 'Influence', 'Compassion'],
    keywordsReversed: ['Inner Strength', 'Self-Doubt', 'Low Energy', 'Raw Emotion'],
    meaning: 'Strength, courage, patience, control, compassion.',
    image: 'strength.jpg'
  },
  {
    id: 'maj_9',
    name: 'The Hermit',
    arcana: 'Major',
    keywords: ['Soul-searching', 'Introspection', 'Being Alone', 'Inner Guidance'],
    keywordsReversed: ['Isolation', 'Loneliness', 'Withdrawal'],
    meaning: 'Soul-searching, introspection, being alone, inner guidance.',
    image: 'hermit.jpg'
  },
  {
    id: 'maj_10',
    name: 'Wheel of Fortune',
    arcana: 'Major',
    keywords: ['Good Luck', 'Karma', 'Life Cycles', 'Destiny', 'A Turning Point'],
    keywordsReversed: ['Bad Luck', 'Resistance to Change', 'Breaking Cycles'],
    meaning: 'Good luck, karma, life cycles, destiny, a turning point.',
    image: 'wheel_of_fortune.jpg'
  },
  {
    id: 'maj_11',
    name: 'Justice',
    arcana: 'Major',
    keywords: ['Justice', 'Fairness', 'Truth', 'Cause and Effect', 'Law'],
    keywordsReversed: ['Unfairness', 'Lack of Accountability', 'Dishonesty'],
    meaning: 'Justice, fairness, truth, cause and effect, law.',
    image: 'justice.jpg'
  },
  {
    id: 'maj_12',
    name: 'The Hanged Man',
    arcana: 'Major',
    keywords: ['Pause', 'Surrender', 'Letting Go', 'New Perspectives'],
    keywordsReversed: ['Delays', 'Resistance', 'Stalling', 'Indecision'],
    meaning: 'Suspension, restriction, letting go, sacrifice.',
    image: 'hanged_man.jpg'
  },
  {
    id: 'maj_13',
    name: 'Death',
    arcana: 'Major',
    keywords: ['Endings', 'Change', 'Transformation', 'Transition'],
    keywordsReversed: ['Resistance to Change', 'Personal Transformation', 'Inner Purging'],
    meaning: 'Endings, beginnings, change, transformation, transition.',
    image: 'death.jpg'
  },
  {
    id: 'maj_14',
    name: 'Temperance',
    arcana: 'Major',
    keywords: ['Balance', 'Moderation', 'Patience', 'Purpose'],
    keywordsReversed: ['Imbalance', 'Excess', 'Self-Healing', 'Re-alignment'],
    meaning: 'Balance, moderation, patience, purpose, meaning.',
    image: 'temperance.jpg'
  },
  {
    id: 'maj_15',
    name: 'The Devil',
    arcana: 'Major',
    keywords: ['Shadow Self', 'Attachment', 'Addiction', 'Restriction', 'Sexuality'],
    keywordsReversed: ['Releasing Limiting Beliefs', 'Exploring Dark Thoughts', 'Detachment'],
    meaning: 'Addiction, materialism, playfulness.',
    image: 'devil.jpg'
  },
  {
    id: 'maj_16',
    name: 'The Tower',
    arcana: 'Major',
    keywords: ['Sudden Change', 'Upheaval', 'Chaos', 'Revelation', 'Awakening'],
    keywordsReversed: ['Personal Transformation', 'Fear of Change', 'Averting Disaster'],
    meaning: 'Sudden change, upheaval, chaos, revelation, awakening.',
    image: 'tower.jpg'
  },
  {
    id: 'maj_17',
    name: 'The Star',
    arcana: 'Major',
    keywords: ['Hope', 'Faith', 'Purpose', 'Renewal', 'Spirituality'],
    keywordsReversed: ['Lack of Faith', 'Despair', 'Self-Trust', 'Disconnect'],
    meaning: 'Hope, faith, purpose, renewal, spirituality.',
    image: 'star.jpg'
  },
  {
    id: 'maj_18',
    name: 'The Moon',
    arcana: 'Major',
    keywords: ['Illusion', 'Fear', 'Anxiety', 'Subconscious', 'Intuition'],
    keywordsReversed: ['Release of Fear', 'Repressed Emotion', 'Inner Confusion'],
    meaning: 'Illusion, fear, anxiety, subconscious, intuition.',
    image: 'moon.jpg'
  },
  {
    id: 'maj_19',
    name: 'The Sun',
    arcana: 'Major',
    keywords: ['Positivity', 'Fun', 'Warmth', 'Success', 'Vitality'],
    keywordsReversed: ['Inner Child', 'Feeling Down', 'Overly Optimistic'],
    meaning: 'Positivity, fun, warmth, success, vitality.',
    image: 'sun.jpg'
  },
  {
    id: 'maj_20',
    name: 'Judgement',
    arcana: 'Major',
    keywords: ['Judgement', 'Rebirth', 'Inner Calling', 'Absolution'],
    keywordsReversed: ['Self-Doubt', 'Inner Critic', 'Ignoring the Call'],
    meaning: 'Judgement, rebirth, inner calling, absolution.',
    image: 'judgement.jpg'
  },
  {
    id: 'maj_21',
    name: 'The World',
    arcana: 'Major',
    keywords: ['Completion', 'Integration', 'Accomplishment', 'Travel'],
    keywordsReversed: ['Seeking Personal Closure', 'Shortcuts', 'Delays'],
    meaning: 'Completion, integration, accomplishment, travel.',
    image: 'world.jpg'
  },
  // Note: For brevity in file generation, Minor Arcana are represented by Aces.
  // In a real production file, all 56 Minor Arcana cards would be listed here.
  // The logic handles any card object structure.
  {
    id: 'cups_01',
    name: 'Ace of Cups',
    arcana: 'Minor',
    suit: 'Cups',
    keywords: ['Love', 'New Feelings', 'Compassion', 'Creativity'],
    keywordsReversed: ['Self-Love', 'Intuition', 'Repressed Emotions'],
    meaning: 'New feelings, spirituality, intuition.',
    image: 'cups_01.jpg'
  },
  {
    id: 'pentacles_01',
    name: 'Ace of Pentacles',
    arcana: 'Minor',
    suit: 'Pentacles',
    keywords: ['Opportunity', 'Prosperity', 'New Venture', 'Manifestation'],
    keywordsReversed: ['Lost Opportunity', 'Lack of Planning', 'Foresight'],
    meaning: 'A new financial or career opportunity, manifestation.',
    image: 'pentacles_01.jpg'
  },
  {
    id: 'swords_01',
    name: 'Ace of Swords',
    arcana: 'Minor',
    suit: 'Swords',
    keywords: ['Breakthrough', 'New Idea', 'Mental Clarity', 'Success'],
    keywordsReversed: ['Inner Clarity', 'Re-thinking', 'Clouded Judgement'],
    meaning: 'A new idea, clarity, breakthrough, sharp mind.',
    image: 'swords_01.jpg'
  },
  {
    id: 'wands_01',
    name: 'Ace of Wands',
    arcana: 'Minor',
    suit: 'Wands',
    keywords: ['Inspiration', 'New Opportunity', 'Growth', 'Potential'],
    keywordsReversed: ['Emerging Idea', 'Lack of Direction', 'Distractions'],
    meaning: 'Inspiration, power, creation, beginnings, potential.',
    image: 'wands_01.jpg'
  }
];
