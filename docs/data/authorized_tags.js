const userDefinedAuthorizedTags = {
  // 模型类型 Model
  "Model:cnn": {
    "description": "Papers using CNN-based architecture"
  },
  "Model:vit": {
    "description": "Papers using Vision Transformer (ViT) architecture"
  },
  "Model:hybrid": {
    "description": "Papers using hybrid models combining CNN and transformer architectures"
  },
  "Model:survey": {
    "description": "Survey or literature review papers"
  },

  // 输入类型 Input
  "Input:image": {
    "description": "Detection of deepfakes in image data"
  },
  "Input:video": {
    "description": "Detection of deepfakes in video data"
  },

  // 评估方式 Eval
  "Eval:auc": {
    "description": "Evaluation includes AUC (Area Under Curve) as metric"
  },
  "Eval:benchmark dataset": {
    "description": "Papers evaluated on standard benchmark datasets such as DFDC or FaceForensics++"
  }
};
