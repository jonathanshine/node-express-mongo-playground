import { fs } from 'fs';

const filePath = 'sensorConfigurations/version7.0.json';
const v7Configuration = {
    sensor_version: 7.0,
    created_at: '2022-01-01T00:00:00.000Z',
    field_names: {
        raw: [
            'location_id',
            'created_at',
            'device_id',
            't',
            'rh',
            'co',
            'co2',
            'o3',
            'nh3',
            'pm25',
            'pm10',
            'no',
            'no2',
            'voc',
            'p',
            'so2'
        ],
        real: [
            'created_at',
            'location_id',
            'device_id',
            'aqi',
            't',
            'rh',
            'o3_ug_m3',
            'pm25_ug_m3',
            'pm10_ug_m3',
            'no_ug_m3',
            'no2_ug_m3',
            'co_mg_m3',
            'co2_ppm',
            'nh3_ug_m3',
            'voc_ppb',
            'p_hPa',
            'so2_ug_m3'
        ]
    },
    base_formulas: {
        o3: '-0.635555 * raw + 99.3178',
        no2: '2663.83 - 320.72 * LN(raw)',
        so2: 'raw / 10'
    },
    offsets: {
        raw: {
            o3: {
                ND000548: 'conversion/formula',
                ND000549: 'conversion/formula'
            }
        },
        real: {
            o3_ug_m3: {
                ND000548: { formula: 'string', model: 'machine-learning model name' },
                ND000549: { formula: 'string', model: 'machine-learning model name' }
            }
        }
    }
};

try {
    fs.writeFileSync(filePath, JSON.stringify(v7Configuration, null, 2), 'utf8');
    console.log('The file was saved!');
} catch (err) {
    console.err('An error has ocurred when saving the file.');
}
