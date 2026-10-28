/**
 * HIDIN 3D - Global Configuration
 * Official Brand, Instagram & WhatsApp Settings
 */
const CONFIG = {
  brand: {
    name: "HIDIN 3D",
    tagline: "Your Ideas. Brought to Life in 3D.",
    description: "From personalised gifts and creative collectibles to functional accessories and custom-designed creations, we turn your ideas into reality through custom 3D printing.",
    instagram: "hidin_3d_art",
    instagramUrl: "https://instagram.com/hidin_3d_art",
    whatsappDisplay: "+91 9087055806",
    email: "contact@hidin3d.com",
    location: "Custom 3D Printing Studio & Worldwide Shipping",
  },
  
  // Official WhatsApp Configuration
  // Format: International format without '+' or spaces: 919087055806
  whatsapp: {
    number: "919087055806",
    
    // Default general enquiry template
    generalEnquiry: "Hi HIDIN 3D! I'd like to request a custom 3D print. Could you please let me know how to share my idea/design and get started?",
    
    // Product enquiry builder
    buildProductEnquiry: (productName, options = {}) => {
      let msg = `Hi HIDIN 3D! I'm interested in your ${productName}.`;
      if (options.color) {
        msg += ` Preferred Finish: ${options.color}.`;
      }
      if (options.size) {
        msg += ` Preferred Size: ${options.size}.`;
      }
      if (options.customNote) {
        msg += ` Custom note: "${options.customNote}".`;
      }
      msg += ` Could you please share the available customisation options and pricing?`;
      return msg;
    },

    // Custom design request builder
    buildCustomRequest: (details = {}) => {
      let msg = `Hi HIDIN 3D! I have a custom 3D printing project request:\n`;
      msg += `• Project Type: ${details.category || "Custom Print"}\n`;
      msg += `• Material/Finish: ${details.material || "Recommended by HIDIN 3D"}\n`;
      msg += `• Color Preference: ${details.color || "Open to suggestions"}\n`;
      if (details.description) {
        msg += `• Project Details: ${details.description}\n`;
      }
      msg += `Could you please share estimated timelines, customisation options, and a quote?`;
      return msg;
    }
  }
};

// Make accessible globally
window.CONFIG = CONFIG;
