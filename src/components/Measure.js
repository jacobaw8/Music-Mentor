import React, { useState, useEffect } from 'react';
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, TextInput, Platform, Pressable, Image, NativeModules } from 'react-native';

const API_URL = Platform.OS !== 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';
//const API_URL = 'http://localhost:5000';


const Measure = ({
    measureHeight = 90,
    measureWidth = 410,
    numNotes = 8,
    numNotePositions = 8,
    topNote = "F5",
    bottomNote = "F4",
    audio = null,
}) => {

    const BLACK_LINE_MARGIN = (measureHeight - 3) / 4
    const SIZE_OF_MEASURE = numNotePositions;
    const MEASURES = 1;
    const HEIGHT_OF_MEASURE = 8;
    const TREBLE_CLEF_MARGIN = 0.12195121951219512195121951219512

    const [image1Af, setImage1Af] = useState("quarter-note-flat")
    const [image1Bf, setImage1Bf] = useState("quarter-note-flat")
    const [image1Cf, setImage1Cf] = useState("quarter-note-flat")
    const [image1Df, setImage1Df] = useState("quarter-note-flat")
    const [image1Ef, setImage1Ef] = useState("quarter-note-flat")
    const [image1Ff, setImage1Ff] = useState("quarter-note-flat")
    const [image1Gf, setImage1Gf] = useState("quarter-note-flat")
    const [image1Hf, setImage1Hf] = useState("quarter-note-flat")

    const [image1A, setImage1A] = useState("quarter-note")
    const [image1B, setImage1B] = useState("quarter-note")
    const [image1C, setImage1C] = useState("quarter-note")
    const [image1D, setImage1D] = useState("quarter-note")
    const [image1E, setImage1E] = useState("quarter-note")
    const [image1F, setImage1F] = useState("quarter-note")
    const [image1G, setImage1G] = useState("quarter-note")
    const [image1H, setImage1H] = useState("quarter-note")

    const [image1As, setImage1As] = useState("quarter-note-sharp")
    const [image1Bs, setImage1Bs] = useState("quarter-note-sharp")
    const [image1Cs, setImage1Cs] = useState("quarter-note-sharp")
    const [image1Ds, setImage1Ds] = useState("quarter-note-sharp")
    const [image1Es, setImage1Es] = useState("quarter-note-sharp")
    const [image1Fs, setImage1Fs] = useState("quarter-note-sharp")
    const [image1Gs, setImage1Gs] = useState("quarter-note-sharp")
    const [image1Hs, setImage1Hs] = useState("quarter-note-sharp")

    const [image2Af, setImage2Af] = useState("quarter-note-flat")
    const [image2Bf, setImage2Bf] = useState("quarter-note-flat")
    const [image2Cf, setImage2Cf] = useState("quarter-note-flat")
    const [image2Df, setImage2Df] = useState("quarter-note-flat")
    const [image2Ef, setImage2Ef] = useState("quarter-note-flat")
    const [image2Ff, setImage2Ff] = useState("quarter-note-flat")
    const [image2Gf, setImage2Gf] = useState("quarter-note-flat")
    const [image2Hf, setImage2Hf] = useState("quarter-note-flat")

    const [image2A, setImage2A] = useState("quarter-note")
    const [image2B, setImage2B] = useState("quarter-note")
    const [image2C, setImage2C] = useState("quarter-note")
    const [image2D, setImage2D] = useState("quarter-note")
    const [image2E, setImage2E] = useState("quarter-note")
    const [image2F, setImage2F] = useState("quarter-note")
    const [image2G, setImage2G] = useState("quarter-note")
    const [image2H, setImage2H] = useState("quarter-note")

    const [image2As, setImage2As] = useState("quarter-note-sharp")
    const [image2Bs, setImage2Bs] = useState("quarter-note-sharp")
    const [image2Cs, setImage2Cs] = useState("quarter-note-sharp")
    const [image2Ds, setImage2Ds] = useState("quarter-note-sharp")
    const [image2Es, setImage2Es] = useState("quarter-note-sharp")
    const [image2Fs, setImage2Fs] = useState("quarter-note-sharp")
    const [image2Gs, setImage2Gs] = useState("quarter-note-sharp")
    const [image2Hs, setImage2Hs] = useState("quarter-note-sharp")

    const [image3Af, setImage3Af] = useState("quarter-note-flat")
    const [image3Bf, setImage3Bf] = useState("quarter-note-flat")
    const [image3Cf, setImage3Cf] = useState("quarter-note-flat")
    const [image3Df, setImage3Df] = useState("quarter-note-flat")
    const [image3Ef, setImage3Ef] = useState("quarter-note-flat")
    const [image3Ff, setImage3Ff] = useState("quarter-note-flat")
    const [image3Gf, setImage3Gf] = useState("quarter-note-flat")
    const [image3Hf, setImage3Hf] = useState("quarter-note-flat")

    const [image3A, setImage3A] = useState("quarter-note")
    const [image3B, setImage3B] = useState("quarter-note")
    const [image3C, setImage3C] = useState("quarter-note")
    const [image3D, setImage3D] = useState("quarter-note")
    const [image3E, setImage3E] = useState("quarter-note")
    const [image3F, setImage3F] = useState("quarter-note")
    const [image3G, setImage3G] = useState("quarter-note")
    const [image3H, setImage3H] = useState("quarter-note")

    const [image3As, setImage3As] = useState("quarter-note-sharp")
    const [image3Bs, setImage3Bs] = useState("quarter-note-sharp")
    const [image3Cs, setImage3Cs] = useState("quarter-note-sharp")
    const [image3Ds, setImage3Ds] = useState("quarter-note-sharp")
    const [image3Es, setImage3Es] = useState("quarter-note-sharp")
    const [image3Fs, setImage3Fs] = useState("quarter-note-sharp")
    const [image3Gs, setImage3Gs] = useState("quarter-note-sharp")
    const [image3Hs, setImage3Hs] = useState("quarter-note-sharp")

    const [image4Af, setImage4Af] = useState("quarter-note-flat")
    const [image4Bf, setImage4Bf] = useState("quarter-note-flat")
    const [image4Cf, setImage4Cf] = useState("quarter-note-flat")
    const [image4Df, setImage4Df] = useState("quarter-note-flat")
    const [image4Ef, setImage4Ef] = useState("quarter-note-flat")
    const [image4Ff, setImage4Ff] = useState("quarter-note-flat")
    const [image4Gf, setImage4Gf] = useState("quarter-note-flat")
    const [image4Hf, setImage4Hf] = useState("quarter-note-flat")

    const [image4A, setImage4A] = useState("quarter-note")
    const [image4B, setImage4B] = useState("quarter-note")
    const [image4C, setImage4C] = useState("quarter-note")
    const [image4D, setImage4D] = useState("quarter-note")
    const [image4E, setImage4E] = useState("quarter-note")
    const [image4F, setImage4F] = useState("quarter-note")
    const [image4G, setImage4G] = useState("quarter-note")
    const [image4H, setImage4H] = useState("quarter-note")

    const [image4As, setImage4As] = useState("quarter-note-sharp")
    const [image4Bs, setImage4Bs] = useState("quarter-note-sharp")
    const [image4Cs, setImage4Cs] = useState("quarter-note-sharp")
    const [image4Ds, setImage4Ds] = useState("quarter-note-sharp")
    const [image4Es, setImage4Es] = useState("quarter-note-sharp")
    const [image4Fs, setImage4Fs] = useState("quarter-note-sharp")
    const [image4Gs, setImage4Gs] = useState("quarter-note-sharp")
    const [image4Hs, setImage4Hs] = useState("quarter-note-sharp")

    const [image5Af, setImage5Af] = useState("quarter-note-flat")
    const [image5Bf, setImage5Bf] = useState("quarter-note-flat")
    const [image5Cf, setImage5Cf] = useState("quarter-note-flat")
    const [image5Df, setImage5Df] = useState("quarter-note-flat")
    const [image5Ef, setImage5Ef] = useState("quarter-note-flat")
    const [image5Ff, setImage5Ff] = useState("quarter-note-flat")
    const [image5Gf, setImage5Gf] = useState("quarter-note-flat")
    const [image5Hf, setImage5Hf] = useState("quarter-note-flat")

    const [image5A, setImage5A] = useState("quarter-note")
    const [image5B, setImage5B] = useState("quarter-note")
    const [image5C, setImage5C] = useState("quarter-note")
    const [image5D, setImage5D] = useState("quarter-note")
    const [image5E, setImage5E] = useState("quarter-note")
    const [image5F, setImage5F] = useState("quarter-note")
    const [image5G, setImage5G] = useState("quarter-note")
    const [image5H, setImage5H] = useState("quarter-note")

    const [image5As, setImage5As] = useState("quarter-note-sharp")
    const [image5Bs, setImage5Bs] = useState("quarter-note-sharp")
    const [image5Cs, setImage5Cs] = useState("quarter-note-sharp")
    const [image5Ds, setImage5Ds] = useState("quarter-note-sharp")
    const [image5Es, setImage5Es] = useState("quarter-note-sharp")
    const [image5Fs, setImage5Fs] = useState("quarter-note-sharp")
    const [image5Gs, setImage5Gs] = useState("quarter-note-sharp")
    const [image5Hs, setImage5Hs] = useState("quarter-note-sharp")

    const [image6Af, setImage6Af] = useState("quarter-note-flat")
    const [image6Bf, setImage6Bf] = useState("quarter-note-flat")
    const [image6Cf, setImage6Cf] = useState("quarter-note-flat")
    const [image6Df, setImage6Df] = useState("quarter-note-flat")
    const [image6Ef, setImage6Ef] = useState("quarter-note-flat")
    const [image6Ff, setImage6Ff] = useState("quarter-note-flat")
    const [image6Gf, setImage6Gf] = useState("quarter-note-flat")
    const [image6Hf, setImage6Hf] = useState("quarter-note-flat")

    const [image6A, setImage6A] = useState("quarter-note")
    const [image6B, setImage6B] = useState("quarter-note")
    const [image6C, setImage6C] = useState("quarter-note")
    const [image6D, setImage6D] = useState("quarter-note")
    const [image6E, setImage6E] = useState("quarter-note")
    const [image6F, setImage6F] = useState("quarter-note")
    const [image6G, setImage6G] = useState("quarter-note")
    const [image6H, setImage6H] = useState("quarter-note")

    const [image6As, setImage6As] = useState("quarter-note-sharp")
    const [image6Bs, setImage6Bs] = useState("quarter-note-sharp")
    const [image6Cs, setImage6Cs] = useState("quarter-note-sharp")
    const [image6Ds, setImage6Ds] = useState("quarter-note-sharp")
    const [image6Es, setImage6Es] = useState("quarter-note-sharp")
    const [image6Fs, setImage6Fs] = useState("quarter-note-sharp")
    const [image6Gs, setImage6Gs] = useState("quarter-note-sharp")
    const [image6Hs, setImage6Hs] = useState("quarter-note-sharp")

    const [image7Af, setImage7Af] = useState("quarter-note-flat")
    const [image7Bf, setImage7Bf] = useState("quarter-note-flat")
    const [image7Cf, setImage7Cf] = useState("quarter-note-flat")
    const [image7Df, setImage7Df] = useState("quarter-note-flat")
    const [image7Ef, setImage7Ef] = useState("quarter-note-flat")
    const [image7Ff, setImage7Ff] = useState("quarter-note-flat")
    const [image7Gf, setImage7Gf] = useState("quarter-note-flat")
    const [image7Hf, setImage7Hf] = useState("quarter-note-flat")

    const [image7A, setImage7A] = useState("quarter-note")
    const [image7B, setImage7B] = useState("quarter-note")
    const [image7C, setImage7C] = useState("quarter-note")
    const [image7D, setImage7D] = useState("quarter-note")
    const [image7E, setImage7E] = useState("quarter-note")
    const [image7F, setImage7F] = useState("quarter-note")
    const [image7G, setImage7G] = useState("quarter-note")
    const [image7H, setImage7H] = useState("quarter-note")

    const [image7As, setImage7As] = useState("quarter-note-sharp")
    const [image7Bs, setImage7Bs] = useState("quarter-note-sharp")
    const [image7Cs, setImage7Cs] = useState("quarter-note-sharp")
    const [image7Ds, setImage7Ds] = useState("quarter-note-sharp")
    const [image7Es, setImage7Es] = useState("quarter-note-sharp")
    const [image7Fs, setImage7Fs] = useState("quarter-note-sharp")
    const [image7Gs, setImage7Gs] = useState("quarter-note-sharp")
    const [image7Hs, setImage7Hs] = useState("quarter-note-sharp")

    const [image8Af, setImage8Af] = useState("quarter-note-flat")
    const [image8Bf, setImage8Bf] = useState("quarter-note-flat")
    const [image8Cf, setImage8Cf] = useState("quarter-note-flat")
    const [image8Df, setImage8Df] = useState("quarter-note-flat")
    const [image8Ef, setImage8Ef] = useState("quarter-note-flat")
    const [image8Ff, setImage8Ff] = useState("quarter-note-flat")
    const [image8Gf, setImage8Gf] = useState("quarter-note-flat")
    const [image8Hf, setImage8Hf] = useState("quarter-note-flat")

    const [image8A, setImage8A] = useState("quarter-note")
    const [image8B, setImage8B] = useState("quarter-note")
    const [image8C, setImage8C] = useState("quarter-note")
    const [image8D, setImage8D] = useState("quarter-note")
    const [image8E, setImage8E] = useState("quarter-note")
    const [image8F, setImage8F] = useState("quarter-note")
    const [image8G, setImage8G] = useState("quarter-note")
    const [image8H, setImage8H] = useState("quarter-note")

    const [image8As, setImage8As] = useState("quarter-note-sharp")
    const [image8Bs, setImage8Bs] = useState("quarter-note-sharp")
    const [image8Cs, setImage8Cs] = useState("quarter-note-sharp")
    const [image8Ds, setImage8Ds] = useState("quarter-note-sharp")
    const [image8Es, setImage8Es] = useState("quarter-note-sharp")
    const [image8Fs, setImage8Fs] = useState("quarter-note-sharp")
    const [image8Gs, setImage8Gs] = useState("quarter-note-sharp")
    const [image8Hs, setImage8Hs] = useState("quarter-note-sharp")

    const [opacity1Af, setOpacity1Af] = useState('0')
    const [opacity1Bf, setOpacity1Bf] = useState('0')
    const [opacity1Cf, setOpacity1Cf] = useState('0')
    const [opacity1Df, setOpacity1Df] = useState('0')
    const [opacity1Ef, setOpacity1Ef] = useState('0')
    const [opacity1Ff, setOpacity1Ff] = useState('0')
    const [opacity1Gf, setOpacity1Gf] = useState('0')
    const [opacity1Hf, setOpacity1Hf] = useState('0')

    const [opacity1A, setOpacity1A] = useState('0')
    const [opacity1B, setOpacity1B] = useState('0')
    const [opacity1C, setOpacity1C] = useState('0')
    const [opacity1D, setOpacity1D] = useState('0')
    const [opacity1E, setOpacity1E] = useState('0')
    const [opacity1F, setOpacity1F] = useState('0')
    const [opacity1G, setOpacity1G] = useState('0')
    const [opacity1H, setOpacity1H] = useState('0')

    const [opacity1As, setOpacity1As] = useState('0')
    const [opacity1Bs, setOpacity1Bs] = useState('0')
    const [opacity1Cs, setOpacity1Cs] = useState('0')
    const [opacity1Ds, setOpacity1Ds] = useState('0')
    const [opacity1Es, setOpacity1Es] = useState('0')
    const [opacity1Fs, setOpacity1Fs] = useState('0')
    const [opacity1Gs, setOpacity1Gs] = useState('0')
    const [opacity1Hs, setOpacity1Hs] = useState('0')

    const [opacity2Af, setOpacity2Af] = useState('0')
    const [opacity2Bf, setOpacity2Bf] = useState('0')
    const [opacity2Cf, setOpacity2Cf] = useState('0')
    const [opacity2Df, setOpacity2Df] = useState('0')
    const [opacity2Ef, setOpacity2Ef] = useState('0')
    const [opacity2Ff, setOpacity2Ff] = useState('0')
    const [opacity2Gf, setOpacity2Gf] = useState('0')
    const [opacity2Hf, setOpacity2Hf] = useState('0')

    const [opacity2A, setOpacity2A] = useState('0')
    const [opacity2B, setOpacity2B] = useState('0')
    const [opacity2C, setOpacity2C] = useState('0')
    const [opacity2D, setOpacity2D] = useState('0')
    const [opacity2E, setOpacity2E] = useState('0')
    const [opacity2F, setOpacity2F] = useState('0')
    const [opacity2G, setOpacity2G] = useState('0')
    const [opacity2H, setOpacity2H] = useState('0')

    const [opacity2As, setOpacity2As] = useState('0')
    const [opacity2Bs, setOpacity2Bs] = useState('0')
    const [opacity2Cs, setOpacity2Cs] = useState('0')
    const [opacity2Ds, setOpacity2Ds] = useState('0')
    const [opacity2Es, setOpacity2Es] = useState('0')
    const [opacity2Fs, setOpacity2Fs] = useState('0')
    const [opacity2Gs, setOpacity2Gs] = useState('0')
    const [opacity2Hs, setOpacity2Hs] = useState('0')

    const [opacity3Af, setOpacity3Af] = useState('0')
    const [opacity3Bf, setOpacity3Bf] = useState('0')
    const [opacity3Cf, setOpacity3Cf] = useState('0')
    const [opacity3Df, setOpacity3Df] = useState('0')
    const [opacity3Ef, setOpacity3Ef] = useState('0')
    const [opacity3Ff, setOpacity3Ff] = useState('0')
    const [opacity3Gf, setOpacity3Gf] = useState('0')
    const [opacity3Hf, setOpacity3Hf] = useState('0')

    const [opacity3A, setOpacity3A] = useState('0')
    const [opacity3B, setOpacity3B] = useState('0')
    const [opacity3C, setOpacity3C] = useState('0')
    const [opacity3D, setOpacity3D] = useState('0')
    const [opacity3E, setOpacity3E] = useState('0')
    const [opacity3F, setOpacity3F] = useState('0')
    const [opacity3G, setOpacity3G] = useState('0')
    const [opacity3H, setOpacity3H] = useState('0')

    const [opacity3As, setOpacity3As] = useState('0')
    const [opacity3Bs, setOpacity3Bs] = useState('0')
    const [opacity3Cs, setOpacity3Cs] = useState('0')
    const [opacity3Ds, setOpacity3Ds] = useState('0')
    const [opacity3Es, setOpacity3Es] = useState('0')
    const [opacity3Fs, setOpacity3Fs] = useState('0')
    const [opacity3Gs, setOpacity3Gs] = useState('0')
    const [opacity3Hs, setOpacity3Hs] = useState('0')

    const [opacity4Af, setOpacity4Af] = useState('0')
    const [opacity4Bf, setOpacity4Bf] = useState('0')
    const [opacity4Cf, setOpacity4Cf] = useState('0')
    const [opacity4Df, setOpacity4Df] = useState('0')
    const [opacity4Ef, setOpacity4Ef] = useState('0')
    const [opacity4Ff, setOpacity4Ff] = useState('0')
    const [opacity4Gf, setOpacity4Gf] = useState('0')
    const [opacity4Hf, setOpacity4Hf] = useState('0')

    const [opacity4A, setOpacity4A] = useState('0')
    const [opacity4B, setOpacity4B] = useState('0')
    const [opacity4C, setOpacity4C] = useState('0')
    const [opacity4D, setOpacity4D] = useState('0')
    const [opacity4E, setOpacity4E] = useState('0')
    const [opacity4F, setOpacity4F] = useState('0')
    const [opacity4G, setOpacity4G] = useState('0')
    const [opacity4H, setOpacity4H] = useState('0')

    const [opacity4As, setOpacity4As] = useState('0')
    const [opacity4Bs, setOpacity4Bs] = useState('0')
    const [opacity4Cs, setOpacity4Cs] = useState('0')
    const [opacity4Ds, setOpacity4Ds] = useState('0')
    const [opacity4Es, setOpacity4Es] = useState('0')
    const [opacity4Fs, setOpacity4Fs] = useState('0')
    const [opacity4Gs, setOpacity4Gs] = useState('0')
    const [opacity4Hs, setOpacity4Hs] = useState('0')

    const [opacity5Af, setOpacity5Af] = useState('0')
    const [opacity5Bf, setOpacity5Bf] = useState('0')
    const [opacity5Cf, setOpacity5Cf] = useState('0')
    const [opacity5Df, setOpacity5Df] = useState('0')
    const [opacity5Ef, setOpacity5Ef] = useState('0')
    const [opacity5Ff, setOpacity5Ff] = useState('0')
    const [opacity5Gf, setOpacity5Gf] = useState('0')
    const [opacity5Hf, setOpacity5Hf] = useState('0')

    const [opacity5A, setOpacity5A] = useState('0')
    const [opacity5B, setOpacity5B] = useState('0')
    const [opacity5C, setOpacity5C] = useState('0')
    const [opacity5D, setOpacity5D] = useState('0')
    const [opacity5E, setOpacity5E] = useState('0')
    const [opacity5F, setOpacity5F] = useState('0')
    const [opacity5G, setOpacity5G] = useState('0')
    const [opacity5H, setOpacity5H] = useState('0')

    const [opacity5As, setOpacity5As] = useState('0')
    const [opacity5Bs, setOpacity5Bs] = useState('0')
    const [opacity5Cs, setOpacity5Cs] = useState('0')
    const [opacity5Ds, setOpacity5Ds] = useState('0')
    const [opacity5Es, setOpacity5Es] = useState('0')
    const [opacity5Fs, setOpacity5Fs] = useState('0')
    const [opacity5Gs, setOpacity5Gs] = useState('0')
    const [opacity5Hs, setOpacity5Hs] = useState('0')

    const [opacity6Af, setOpacity6Af] = useState('0')
    const [opacity6Bf, setOpacity6Bf] = useState('0')
    const [opacity6Cf, setOpacity6Cf] = useState('0')
    const [opacity6Df, setOpacity6Df] = useState('0')
    const [opacity6Ef, setOpacity6Ef] = useState('0')
    const [opacity6Ff, setOpacity6Ff] = useState('0')
    const [opacity6Gf, setOpacity6Gf] = useState('0')
    const [opacity6Hf, setOpacity6Hf] = useState('0')

    const [opacity6A, setOpacity6A] = useState('0')
    const [opacity6B, setOpacity6B] = useState('0')
    const [opacity6C, setOpacity6C] = useState('0')
    const [opacity6D, setOpacity6D] = useState('0')
    const [opacity6E, setOpacity6E] = useState('0')
    const [opacity6F, setOpacity6F] = useState('0')
    const [opacity6G, setOpacity6G] = useState('0')
    const [opacity6H, setOpacity6H] = useState('0')

    const [opacity6As, setOpacity6As] = useState('0')
    const [opacity6Bs, setOpacity6Bs] = useState('0')
    const [opacity6Cs, setOpacity6Cs] = useState('0')
    const [opacity6Ds, setOpacity6Ds] = useState('0')
    const [opacity6Es, setOpacity6Es] = useState('0')
    const [opacity6Fs, setOpacity6Fs] = useState('0')
    const [opacity6Gs, setOpacity6Gs] = useState('0')
    const [opacity6Hs, setOpacity6Hs] = useState('0')

    const [opacity7Af, setOpacity7Af] = useState('0')
    const [opacity7Bf, setOpacity7Bf] = useState('0')
    const [opacity7Cf, setOpacity7Cf] = useState('0')
    const [opacity7Df, setOpacity7Df] = useState('0')
    const [opacity7Ef, setOpacity7Ef] = useState('0')
    const [opacity7Ff, setOpacity7Ff] = useState('0')
    const [opacity7Gf, setOpacity7Gf] = useState('0')
    const [opacity7Hf, setOpacity7Hf] = useState('0')

    const [opacity7A, setOpacity7A] = useState('0')
    const [opacity7B, setOpacity7B] = useState('0')
    const [opacity7C, setOpacity7C] = useState('0')
    const [opacity7D, setOpacity7D] = useState('0')
    const [opacity7E, setOpacity7E] = useState('0')
    const [opacity7F, setOpacity7F] = useState('0')
    const [opacity7G, setOpacity7G] = useState('0')
    const [opacity7H, setOpacity7H] = useState('0')

    const [opacity7As, setOpacity7As] = useState('0')
    const [opacity7Bs, setOpacity7Bs] = useState('0')
    const [opacity7Cs, setOpacity7Cs] = useState('0')
    const [opacity7Ds, setOpacity7Ds] = useState('0')
    const [opacity7Es, setOpacity7Es] = useState('0')
    const [opacity7Fs, setOpacity7Fs] = useState('0')
    const [opacity7Gs, setOpacity7Gs] = useState('0')
    const [opacity7Hs, setOpacity7Hs] = useState('0')

    const [opacity8Af, setOpacity8Af] = useState('0')
    const [opacity8Bf, setOpacity8Bf] = useState('0')
    const [opacity8Cf, setOpacity8Cf] = useState('0')
    const [opacity8Df, setOpacity8Df] = useState('0')
    const [opacity8Ef, setOpacity8Ef] = useState('0')
    const [opacity8Ff, setOpacity8Ff] = useState('0')
    const [opacity8Gf, setOpacity8Gf] = useState('0')
    const [opacity8Hf, setOpacity8Hf] = useState('0')

    const [opacity8A, setOpacity8A] = useState('0')
    const [opacity8B, setOpacity8B] = useState('0')
    const [opacity8C, setOpacity8C] = useState('0')
    const [opacity8D, setOpacity8D] = useState('0')
    const [opacity8E, setOpacity8E] = useState('0')
    const [opacity8F, setOpacity8F] = useState('0')
    const [opacity8G, setOpacity8G] = useState('0')
    const [opacity8H, setOpacity8H] = useState('0')

    const [opacity8As, setOpacity8As] = useState('0')
    const [opacity8Bs, setOpacity8Bs] = useState('0')
    const [opacity8Cs, setOpacity8Cs] = useState('0')
    const [opacity8Ds, setOpacity8Ds] = useState('0')
    const [opacity8Es, setOpacity8Es] = useState('0')
    const [opacity8Fs, setOpacity8Fs] = useState('0')
    const [opacity8Gs, setOpacity8Gs] = useState('0')
    const [opacity8Hs, setOpacity8Hs] = useState('0')

    const [dragging, setDragging] = useState(false);

    const [isPlaying, setIsPlaying] = useState(false);


    const playMeasure = async () => {
        let play = false;
        audio.paused ? play = true : play = false;
        if (play){
            audio.play()
        }else{
            audio.currentTime = 0
            audio.pause()
        }
      };









    let changeNote = (num, val, altered, increase) => {
        if (increase == 1) {
            eval("setImage" + num + val)("half-note")
        } else if (increase == 3) {
            eval("setImage" + num + val)("whole-note")
        } else if (increase < 1) {
            eval("setImage" + num + val)("quarter-note")
        }
        console.log(increase)
    }

    let startTracking = (num, val, altered) => {

        //set dragging variable true to show that I am currently pressing down on a value... This keeps other images from appearing
        setDragging(true)


        let startY, startX = -1
        let currY, currX = -1
        let endY, endX = -1
        let marginSize = ((measureWidth - (measureWidth * TREBLE_CLEF_MARGIN)) / numNotePositions)

        let flag = 0

        function onMouseMove(event) {
            if (flag == 0) {
                startY = `${event.clientY}`
                startX = `${event.clientX}`
                flag = 1
            } else {
                currY = `${event.clientY}`
                currX = `${event.clientX}`
            }
            console.log("start: (" + startY + "," + startX + ")")
            console.log("current: (" + currY + "," + currX + ")")

            changeNote(num, val, altered, parseInt((currX - startX) / marginSize, 10))

        }

        function onMouseUp(event) {
            setDragging(false)
            document.removeEventListener('mouseup', onMouseUp)
            document.removeEventListener('mousemove', onMouseMove)
            if (currY != startY && currX != startX) {
                endY = currY;
                endX = currX;
                console.log("start: (" + startY + "," + startX + ")")
                console.log("end: (" + endY + "," + endX + ")")


                //if end is a certain distance beyond start:

                changeNote(num, val, altered, parseInt((endX - startX) / marginSize, 10))
                if (altered == "f" || altered == "s") {
                    eval("setOpacity" + num + val + altered)(1)
                }
                else {
                    eval("setOpacity" + num + val)(1)
                }

                //  check for intercepting notes
                //  change the image path of current note
                //  make sure to revert back when deselected
                //else if the end is a certain distance behind the start:
                //  cancel the selection of the note altogether... maybe

            }
        }


        document.addEventListener('mouseup', onMouseUp);
        document.addEventListener('mousemove', onMouseMove);

    }

    let onSelectedItem = (num, val, altered) => {
        if (altered == 'n') {
            let add = "setOpacity" + num + val
            if (eval("opacity" + num + val + "s") == 1) {
                eval("setOpacity" + num + val + "s")(0)
                eval("setImage" + num + val + "s")("quarter-note")
                return
            }
            if (eval("opacity" + num + val + "f") == 1) {
                eval("setOpacity" + num + val + "f")(0)
                eval("setImage" + num + val + "f")("quarter-note")
                return
            }

            if (eval("opacity" + num + val) == '0.5' || eval("opacity" + num + val) == '0') {
                eval(add)(1)
            } else {
                eval(add)(0)
                eval("setImage" + num + val)("quarter-note")
                return
            }
        } else {
            let add = "setOpacity" + num + val + altered
            if (altered == "s") {
                if (eval("opacity" + num + val + "f") == 1) {
                    eval("setOpacity" + num + val + "f")(0)
                    eval("setImage" + num + val + "f")("quarter-note")
                    return
                }
                if (eval("opacity" + num + val) == 1) {
                    eval("setOpacity" + num + val)(0)
                    eval("setImage" + num + val)("quarter-note")
                    return
                }

            } else if (altered == "f") {
                if (eval("opacity" + num + val + "s") == 1) {
                    eval("setOpacity" + num + val + "s")(0)
                    eval("setImage" + num + val + "s")("quarter-note")
                    return
                }
                if (eval("opacity" + num + val) == 1) {
                    eval("setOpacity" + num + val)(0)
                    eval("setImage" + num + val)("quarter-note")
                    return
                }
            }

            if (eval("opacity" + num + val + altered) == 1) {
                eval(add)(0)
                eval("setImage" + num + val + altered)("quarter-note")
                return
            } else {
                eval(add)(1)
            }
        }

        let file = "A0"
        if (altered == 's') {
            switch (val) {
                case "A":
                    file = "Gb4"
                    break;
                case "B":
                    file = "F4"
                    break;
                case "C":
                    file = "Eb4"
                    break;
                case "D":
                    file = "Db4"
                    break;
                case "E":
                    file = "C4"
                    break;
                case "F":
                    file = "Bb3"
                    break;
                case "G":
                    file = "Ab3"
                    break;
                case "H":
                    file = "Gb3"
                    break;
            }
        }
        else if (altered == 'f') {
            switch (val) {
                case "A":
                    file = "E4"
                    break;
                case "B":
                    file = "Eb4"
                    break;
                case "C":
                    file = "Db4"
                    break;
                case "D":
                    file = "B3"
                    break;
                case "E":
                    file = "Bb3"
                    break;
                case "F":
                    file = "Ab3"
                    break;
                case "G":
                    file = "Gb3"
                    break;
                case "H":
                    file = "E3"
                    break;
            }
        }
        else {
            switch (val) {
                case "A":
                    file = "F4"
                    break;
                case "B":
                    file = "E4"
                    break;
                case "C":
                    file = "D4"
                    break;
                case "D":
                    file = "C4"
                    break;
                case "E":
                    file = "B3"
                    break;
                case "F":
                    file = "A3"
                    break;
                case "G":
                    file = "G3"
                    break;
                case "H":
                    file = "F3"
                    break;
            }
        }

        let audio = new Audio(require("../media/sounds/" + file + ".mp3"))
        audio.play()

    }


    var notes = [];
    // for (var j = 0; j < SIZE_OF_MEASURE; j++) {
    var verticalAlignment = 0;
    var horizontalAlignment = 0;
    for (let i = 0; i < HEIGHT_OF_MEASURE; i++) {
        horizontalAlignment = TREBLE_CLEF_MARGIN * measureWidth;
        for (let k = 0; k < SIZE_OF_MEASURE; k++) {

            var letter = String.fromCharCode(65 + i)
            var j = k + 1

            var fullString1 = "opacity" + j + letter + "f"
            var fullString2 = "opacity" + j + letter
            var fullString3 = "opacity" + j + letter + "s"

            let imagePath1 = eval("image" + j + letter + "f")
            let imagePath2 = eval("image" + j + letter)
            let imagePath3 = eval("image" + j + letter + "s")


            var currPosX1 = verticalAlignment - (0.85 * 40);
            var currPosX2 = verticalAlignment - (0.85 * 40);
            var currPosX3 = verticalAlignment - (0.85 * 40);
            var currPosY1 = horizontalAlignment + ((((measureWidth - (measureWidth * TREBLE_CLEF_MARGIN)) / numNotePositions) - 20) / 2);
            var currPosY2 = horizontalAlignment + ((((measureWidth - (measureWidth * TREBLE_CLEF_MARGIN)) / numNotePositions) - 20) / 2);
            var currPosY3 = horizontalAlignment + ((((measureWidth - (measureWidth * TREBLE_CLEF_MARGIN)) / numNotePositions) - 25) / 2);

            notes.push(
                <View>
                    <Image
                        style={{
                            position: 'absolute',
                            transform: 'translate(' + eval(currPosY1) + 'px, ' + eval(currPosX1) + 'px)',
                            opacity: eval(fullString1),
                            width: '20px',
                            height: '40px',
                            resizeMode: 'contain',
                        }}
                        source={require('../media/images/' + imagePath1 + '.png')}
                    />
                    <Image
                        style={{
                            position: 'absolute',
                            transform: 'translate(' + eval(currPosY2) + 'px, ' + eval(currPosX2) + 'px)',
                            opacity: eval(fullString2),
                            width: '20px',
                            height: '40px',
                            resizeMode: 'contain',

                        }}
                        source={require('../media/images/' + imagePath2 + '.png')}
                    />
                    <Image
                        style={{
                            position: 'absolute',
                            transform: 'translate(' + eval(currPosY3) + 'px, ' + eval(currPosX3) + 'px)',
                            opacity: eval(fullString3),
                            width: '25px',
                            height: '45px',
                            resizeMode: 'contain',
                        }}
                        source={require('../media/images/' + imagePath3 + '.png')}
                    />
                </View>
            )
            horizontalAlignment += ((measureWidth - (measureWidth * TREBLE_CLEF_MARGIN)) / numNotePositions)
        }
        verticalAlignment += (measureHeight / (HEIGHT_OF_MEASURE))
    }
    verticalAlignment = 0;

    var firstPart = [];
    var secondPart = [];
    var thirdPart = [];
    var bars = [];
    var marginLeftVar = TREBLE_CLEF_MARGIN * measureWidth;
    for (let i = 0; i < SIZE_OF_MEASURE; i++) {
        for (let k = 0; k < HEIGHT_OF_MEASURE; k++) {
            let letter = String.fromCharCode(65 + k)
            let j = i + 1
            let full1 = "setOpacity" + j + letter + "f"
            let full2 = "setOpacity" + j + letter
            let full3 = "setOpacity" + j + letter + "s"
            let check1 = 'opacity' + j + letter + "f"
            let check2 = 'opacity' + j + letter
            let check3 = 'opacity' + j + letter + "s"
            let tempHeight = 12.5;

            let top = false
            k == 0 ? top = true : top = false

            firstPart.push(
                <View style={{ width: '100%', height: String(tempHeight) + '%', transform: 'translateY(-50%)', }} >
                    <TouchableOpacity style={{ width: '100%', height: '100%' }} onMouseEnter={() => (eval(check1) == 1 || eval(check2) == 1 || eval(check3) == 1 || dragging == true) ? '' : eval(full1)('0.5')} onMouseLeave={() => (eval(check1) == 1 || eval(check2) == 1 || eval(check3) == 1 || dragging == true) ? '' : eval(full1)('0')} onPress={() => onSelectedItem(j, letter, 'f')} onPressIn={() => startTracking(j, letter, 'f')}>

                    </TouchableOpacity>
                </View>
            );

            secondPart.push(
                <View style={{ width: '100%', height: String(tempHeight) + '%', transform: 'translateY(-50%)', }} >
                    <TouchableOpacity style={{ width: '100%', height: '100%' }} onMouseEnter={() => (eval(check1) == 1 || eval(check2) == 1 || eval(check3) == 1 || dragging == true) ? '' : eval(full2)('0.5')} onMouseLeave={() => (eval(check1) == 1 || eval(check2) == 1 || eval(check3) == 1 || dragging == true) ? '' : eval(full2)('0')} onPress={() => onSelectedItem(j, letter, 'n')} onPressIn={() => startTracking(j, letter, 'n')}>

                    </TouchableOpacity>
                </View>
            )

            thirdPart.push(
                <View style={{ width: '100%', height: String(tempHeight) + '%', transform: 'translateY(-50%)', }} >
                    <TouchableOpacity style={{ width: '100%', height: '100%' }} onMouseEnter={() => (eval(check1) == 1 || eval(check2) == 1 || eval(check3) == 1 || dragging == true) ? '' : eval(full3)('0.5')} onMouseLeave={() => (eval(check1) == 1 || eval(check2) == 1 || eval(check3) == 1 || dragging == true) ? '' : eval(full3)('0')} onPress={() => onSelectedItem(j, letter, 's')} onPressIn={() => startTracking(j, letter, 's')}>

                    </TouchableOpacity>
                </View>
            )
        }

        let quarterWidth = ((measureWidth - (measureWidth * TREBLE_CLEF_MARGIN)) / numNotePositions) / 4
        bars.push(
            <View style={{ height: '100%', height: '100%', position: 'absolute' }}>
                <View style={{ marginLeft: String(marginLeftVar) + 'px', marginTop: '0px', width: String(quarterWidth) + 'px', height: '100%', zIndex: '3', position: 'absolute' }} >
                    {firstPart}
                </View>

                <View style={{ marginLeft: String(marginLeftVar + quarterWidth) + 'px', marginTop: '0px', width: String(quarterWidth * 2) + 'px', height: '100%', zIndex: '1', position: 'absolute' }} >
                    {secondPart}
                </View>

                <View style={{ marginLeft: String(marginLeftVar + quarterWidth * 3) + 'px', marginTop: '0px', width: String(quarterWidth) + 'px', height: '100%', zIndex: '3', position: 'absolute' }} >
                    {thirdPart}
                </View>
            </View>
        )
        marginLeftVar += ((measureWidth - (measureWidth * TREBLE_CLEF_MARGIN)) / numNotePositions);
        var firstPart = [];
        var secondPart = [];
        var thirdPart = [];
    }
    marginLeftVar = 0;




    var generateGrayBars = []
    var currMargin = TREBLE_CLEF_MARGIN * measureWidth
    for (let i = 0; i < numNotePositions; i++) {
        currMargin += (measureWidth - (measureWidth * TREBLE_CLEF_MARGIN)) / (numNotePositions)
        generateGrayBars.push(
            <View style={{ marginLeft: String(currMargin) + 'px', marginTop: '0px', borderLeftColor: 'lightgray', borderLeftWidth: '1px', height: '100%', position: 'absolute' }} />
        )

    }
    currMargin = 0

    var grayBars = []
    grayBars.push(
        <View style={{ width: '100%', height: '100%', position: 'absolute' }}>
            <View style={{ marginLeft: String(TREBLE_CLEF_MARGIN * measureWidth) + 'px', marginTop: '0px', borderLeftColor: 'lightgray', borderLeftWidth: '1px', width: '40px', height: '100%', position: 'absolute' }} />
            {generateGrayBars}
            <View style={{ marginLeft: '100%', marginTop: '0px', borderLeftColor: 'black', borderLeftWidth: '1px', width: '40px', height: '100%', position: 'absolute' }} />
        </View>
    )


    return (
        <View style={styles.back}>

            <View style={{ marginHorizontal: 'auto', marginTop: '75px', backgroundColor: 'white', height: String(measureHeight) + 'px', width: String(measureWidth) + 'px', borderLeftWidth: '1px', }}>
                <Image
                    style={{
                        marginLeft: '0px',
                        marginTop: '0px',
                        position: 'absolute',
                        width: '12.195%',
                        height: '122.22%',
                        transform: 'translateY(-10px)',
                        resizeMode: 'contain',
                    }}
                    source={require('../media/images/treble-clef.png')}
                />

                <View style={{ position: 'absolute', height: '100%', width: '100%' }}>
                    <View style={{ borderBottomColor: 'black', borderBottomWidth: '1px', width: '100%' }} />
                    <View style={{ borderBottomColor: 'black', borderBottomWidth: '1px', width: '100%', marginTop: String(BLACK_LINE_MARGIN) + 'px' }} />
                    <View style={{ borderBottomColor: 'black', borderBottomWidth: '1px', width: '100%', marginTop: String(BLACK_LINE_MARGIN) + 'px' }} />
                    <View style={{ borderBottomColor: 'black', borderBottomWidth: '1px', width: '100%', marginTop: String(BLACK_LINE_MARGIN) + 'px' }} />
                    <View style={{ borderBottomColor: 'black', borderBottomWidth: '1px', width: '100%', marginTop: String(BLACK_LINE_MARGIN) + 'px' }} />
                    {grayBars}
                </View>

                <View style={{ marginLeft: '0px', marginTop: '5.5625px', width: '50px', height: '100%', position: 'absolute' }} >
                </View>


                <View style={{ width: '100%', height: '100%' }}>
                    {notes}
                </View>

                {bars}


            </View>
            <TouchableOpacity style={{ marginTop: '20px', height: '30px', width: '30px', marginHorizontal: 'auto', transform: 'translate(-150px)' }} onPress={() => playMeasure()}>
                <Image style={{ height: '30px', width: '30px' }} source={require('../media/images/play_button.png')}></Image>
            </TouchableOpacity>

        </View>
    );

};


const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '10%',
        backgroundColor: '#EBEBEB',
        borderBottomColor: 'black',
        borderBottomWidth: '1px',
    },
    headerTitle: {
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 'auto',
        marginTop: 'auto',
        fontSize: '25px'
    },
    back: {
        width: '100%',
        height: '100%',
        backgroundColor: '#EBEBEB',
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: '2%',
        marginBottom: '5%',
        textAlign: 'center',
        color: 'black',
    },
});

export default Measure;