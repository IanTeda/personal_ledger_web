//-- ./src/configuration.ts

/// # Configuration
///
/// The configuration module is responsible for providing the application with
/// configuration settings. The configuration settings are loaded from the
/// environment variables in ./src/config.
/// Add a new configuration setting by adding a new property to the Configuration
/// class and setting the value in the constructor.

// Configuration class for application settings of environment variables
class Configuration {
  // Base URL for the authentication service
  AUTHENTICATION_BASE_URL: string;

  // Constructor for the Configuration class
  constructor() {
    this.AUTHENTICATION_BASE_URL = import.meta.env.VITE_AUTHENTICATION_BASE_URL;
  }
}

// Export a new configuration module
export const configuration = new Configuration();

// Export the configuration module
// export default configuration;
