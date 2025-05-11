const userDefinedAuthorizedTags = {
  // 模型类型 Model
  "Model:CNN": {
    "description": "Papers using CNN-based architecture"
  },
  "Model:ViT": {
    "description": "Papers using Vision Transformer (ViT) architecture"
  },
  "Model:Hybrid": {
    "description": "Papers using hybrid models combining CNN and transformer architectures"
  },
  "Model:Survey": {
    "description": "Survey or literature review papers"
  },

  // 输入类型 Input
  "Input:Image": {
    "description": "Detection of deepfakes in image data"
  },
  "Input:Video": {
    "description": "Detection of deepfakes in video data"
  },

  // 评估方式 Eval
  "Eval:AUC": {
    "description": "Evaluation includes AUC (Area Under Curve) as metric"
  },
  "Eval:Benchmark Dataset": {
    "description": "Papers evaluated on standard benchmark datasets such as DFDC or FaceForensics++"
  }
};
