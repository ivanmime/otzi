// API para gestión de estudios
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

class StudiosAPI {
  // Crear nuevo estudio
  static async createStudio(studioData) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/studios/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(studioData)
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error creando estudio:', error);
      throw error;
    }
  }

  // Obtener todos los estudios
  static async getStudios() {
    try {
      const response = await fetch(`${API_BASE_URL}/api/studios`);
      
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error obteniendo estudios:', error);
      throw error;
    }
  }

  // Obtener estudio específico
  static async getStudio(studioId) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/studios/${studioId}`);
      
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error obteniendo estudio:', error);
      throw error;
    }
  }

  // Actualizar estudio
  static async updateStudio(studioId, updateData) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/studios/${studioId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData)
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error actualizando estudio:', error);
      throw error;
    }
  }

  // Eliminar estudio
  static async deleteStudio(studioId) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/studios/${studioId}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error eliminando estudio:', error);
      throw error;
    }
  }

  // Activar/Desactivar bot
  static async toggleBot(studioId, status) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/studios/${studioId}/bot`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status })
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error cambiando estado del bot:', error);
      throw error;
    }
  }

  // Obtener estadísticas del estudio
  static async getStudioStats(studioId) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/studios/${studioId}/stats`);
      
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error obteniendo estadísticas:', error);
      throw error;
    }
  }

  // Obtener logs del bot
  static async getBotLogs(studioId, limit = 100) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/studios/${studioId}/logs?limit=${limit}`);
      
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error obteniendo logs:', error);
      throw error;
    }
  }

  // Desplegar bot en VPS
  static async deployBot(studioId) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/studios/${studioId}/deploy`, {
        method: 'POST'
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error desplegando bot:', error);
      throw error;
    }
  }

  // Obtener estado del bot
  static async getBotStatus(studioId) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/studios/${studioId}/status`);
      
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error obteniendo estado del bot:', error);
      throw error;
    }
  }
}

export default StudiosAPI;
