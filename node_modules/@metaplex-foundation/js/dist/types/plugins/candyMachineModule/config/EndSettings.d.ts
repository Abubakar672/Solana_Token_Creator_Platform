import { EndSettings } from '@metaplex-foundation/mpl-candy-machine';
export declare const ENDSETTING_DATE = "date";
export declare const ENDSETTING_AMOUNT = "amount";
export declare const EndSettingModes: readonly ["date", "amount"];
export declare type EndSettingMode = typeof EndSettingModes[number];
/**
 * Configures {@link CandyMachineConfig.endSettings}
 *
 * End Settings provides a mechanism to stop the mint if a certain condition is
 * met without interaction.
 *
 * @property endSettingType - {@link EndSettingMode} (date or amount) which identifies
 * what {@link EndSettingsConfig.value} means
 * @property value - to test the end condition. This will be either a date
 * string (end DateTime) or an integer amount (items minted)
 * */
export declare type EndSettingsConfig = {
    endSettingType: typeof ENDSETTING_DATE;
    value: string;
} | {
    endSettingType: typeof ENDSETTING_AMOUNT;
    value: number;
};
export declare function endSettingsFromConfig(config?: EndSettingsConfig): EndSettings | undefined;
