<?php
namespace App\Serializer;

use App\Entity\QuestionnaireResult;
use Symfony\Component\Serializer\Normalizer\NormalizerAwareInterface;
use Symfony\Component\Serializer\Normalizer\NormalizerAwareTrait;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;

class QuestionnaireResultNormalizer implements NormalizerInterface, NormalizerAwareInterface
{
    use NormalizerAwareTrait;
    private const ALREADY_CALLED = 'QUESTIONNAIRE_RESULT_ATTRIBUTE_NORMALIZER_ALREADY_CALLED';
    public function normalize($object, $format = null, array $context = [])
    {
        /** @var $object QuestionnaireResult */
        if ($object->isCompleted()) {
            $context['groups'][] = 'questionnaireResult:completed';
        }
        $context[self::ALREADY_CALLED] = true;

        return $this->normalizer->normalize($object, $format, $context);
    }
    public function supportsNormalization($data, $format = null, array $context = [])
    {
        // Make sure we're not called twice
        if (isset($context[self::ALREADY_CALLED])) {
            return false;
        }

        // support one item normalization only
        if (
            !array_key_exists('groups', $context) ||
            !in_array('questionnaireResult:item', $context['groups'], true)
        ) {
            return false;
        }

        return $data instanceof QuestionnaireResult;
    }
}