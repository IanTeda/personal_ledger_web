//-- ./src/configuration.ts

/** 
 * # Configuration Class
 * 
 * Configuration class for application settings of environment variables
 * 
 * The configuration module is responsible for providing the application with
 * configuration settings. The configuration settings are loaded from the
 * environment variables in ./src/config.
 * 
 * Add a new configuration setting by adding a new property to the Configuration
 * class and setting the value in the constructor.
 *  
 * @class Configuration
 * @property {string} AUTHENTICATION_BASE_URL - Base URL for the authentication service
 * @property {string} APPLICATION_MODE - Application mode for the environment (i.e. development or production.)
 * @property {string} LOG_LEVEL - Log level for the application  * 
 * 
 * ## Reference
 * 
 */

type logLevel = "silly" | "trace" | "debug" | "info" | "warn" | "error" | "fatal";


/**
 * ### Application Configuration
 * 
 * Configuration class for application settings of environment variables
 */
class Configuration {
  /**
   * ### Authentication Base URL
   *
   * The base URL for the authentication backend service
   *
   */
  AUTHENTICATION_BASE_URL: string;

  /**
   * ### Application Mode
   *
   * Application mode for the environment (i.e. development or production.)
   *
   * #### Reference
   * - [Vite - Env Variables and Modes](https://vite.dev/guide/env-and-mode#node-env-and-modes)
   */
  APPLICATION_MODE: string;

  /**
   * ### Application Log Level
   *
   * To what level of detail should we log
   */
  LOG_LEVEL: logLevel;

  /**
   * ### Configuration Class Constructor
   */
  constructor() {
    this.AUTHENTICATION_BASE_URL = import.meta.env.VITE_AUTHENTICATION_BASE_URL;
    this.APPLICATION_MODE = import.meta.env.MODE;
    this.LOG_LEVEL = import.meta.env.VITE_LOG_LEVEL || "error";
  }
}

/**
 * ## Application Configuration 
 * 
 * Configuration class for application settings of environment variables, which
 * includes the following values:
 * 
 * - AUTHENTICATION_BASE_URL - Base URL for the authentication service
 * - APPLICATION_MODE - Application mode for the environment (i.e. development or production.)
 * - LOG_LEVEL - Log level for the application
 * 
 */
export const configuration = new Configuration();
